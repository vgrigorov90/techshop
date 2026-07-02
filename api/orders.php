<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['message' => 'Nur POST ist erlaubt.'], 405);
}

$payload = readJsonBody();
$items = $payload['items'] ?? [];
$orderType = cleanString($payload['orderType'] ?? 'cart');
$paymentMethod = cleanString($payload['paymentMethod'] ?? 'Karte');
$studentDiscount = !empty($payload['studentDiscount']);

if (!is_array($items) || count($items) === 0) {
    jsonResponse(['message' => 'Der Warenkorb ist leer.'], 422);
}

try {
    $pdo = db();
    $pdo->beginTransaction();

    $orderNumber = 'CTJ-' . date('Ymd-His') . '-' . random_int(100, 999);
    $insertOrder = $pdo->prepare(
        "INSERT INTO orders (order_number, order_type, payment_method, student_discount, total_amount)
         VALUES (:order_number, :order_type, :payment_method, :student_discount, 0)"
    );
    $insertOrder->execute([
        ':order_number' => $orderNumber,
        ':order_type' => $orderType === 'membership' ? 'membership' : 'cart',
        ':payment_method' => $paymentMethod,
        ':student_discount' => $studentDiscount ? 1 : 0,
    ]);

    $orderId = (int) $pdo->lastInsertId();
    $total = 0.0;
    $findProduct = $pdo->prepare(
        "SELECT id, slug, name, price FROM products WHERE slug = :slug AND is_active = 1 LIMIT 1"
    );
    $insertItem = $pdo->prepare(
        "INSERT INTO order_items
            (order_id, product_id, product_slug, product_name, quantity, unit_price)
         VALUES
            (:order_id, :product_id, :product_slug, :product_name, :quantity, :unit_price)"
    );

    foreach ($items as $item) {
        $slug = cleanString($item['id'] ?? '');
        $quantity = max(1, (int) ($item['quantity'] ?? 1));

        if ($orderType === 'membership' && $slug === 'student-plus') {
            $unitPrice = 4.99;
            $insertItem->execute([
                ':order_id' => $orderId,
                ':product_id' => null,
                ':product_slug' => 'student-plus',
                ':product_name' => 'CampusTech Student+',
                ':quantity' => $quantity,
                ':unit_price' => $unitPrice,
            ]);
            $total += $unitPrice * $quantity;
            continue;
        }

        $findProduct->execute([':slug' => $slug]);
        $product = $findProduct->fetch();

        if (!$product) {
            throw new RuntimeException('Produkt wurde nicht gefunden: ' . $slug);
        }

        $unitPrice = (float) $product['price'];
        if ($studentDiscount) {
            $unitPrice = round($unitPrice * 0.9, 2);
        }

        $insertItem->execute([
            ':order_id' => $orderId,
            ':product_id' => (int) $product['id'],
            ':product_slug' => $product['slug'],
            ':product_name' => $product['name'],
            ':quantity' => $quantity,
            ':unit_price' => $unitPrice,
        ]);
        $total += $unitPrice * $quantity;
    }

    $updateOrder = $pdo->prepare("UPDATE orders SET total_amount = :total WHERE id = :id");
    $updateOrder->execute([':total' => $total, ':id' => $orderId]);
    $pdo->commit();

    jsonResponse([
        'orderId' => $orderId,
        'orderNumber' => $orderNumber,
        'total' => round($total, 2),
    ], 201);
} catch (Throwable $error) {
    if (isset($pdo) && $pdo->inTransaction()) {
        $pdo->rollBack();
    }

    jsonResponse(['message' => 'Bestellung konnte nicht gespeichert werden.'], 500);
}
