<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['message' => 'Nur POST ist erlaubt.'], 405);
}

$payload = readJsonBody();
$name = cleanString($payload['name'] ?? '');
$email = cleanString($payload['email'] ?? '');
$subject = cleanString($payload['subject'] ?? '');
$message = cleanString($payload['message'] ?? '');

if ($name === '' || $subject === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(['message' => 'Bitte alle Pflichtfelder korrekt ausfüllen.'], 422);
}

try {
    $statement = db()->prepare(
        "INSERT INTO contact_requests (name, email, subject, message)
         VALUES (:name, :email, :subject, :message)"
    );
    $statement->execute([
        ':name' => $name,
        ':email' => $email,
        ':subject' => $subject,
        ':message' => $message,
    ]);

    jsonResponse(['requestId' => (int) db()->lastInsertId()], 201);
} catch (Throwable $error) {
    jsonResponse(['message' => 'Kontaktanfrage konnte nicht gespeichert werden.'], 500);
}
