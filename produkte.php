<?php
declare(strict_types=1);

require __DIR__ . '/api/config.php';

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function catalogItems(): array
{
    $statement = db()->query(
        "SELECT
            p.slug,
            p.name,
            p.price,
            p.price_prefix,
            p.price_suffix,
            p.display_price,
            p.old_price,
            p.saving,
            p.badge,
            p.description,
            p.main_image,
            p.gallery_json,
            p.highlights_json,
            p.specs_json,
            p.featured,
            p.product_type,
            b.name AS brand,
            c.name AS category
        FROM products p
        JOIN brands b ON b.id = p.brand_id
        JOIN categories c ON c.id = p.category_id
        WHERE p.is_active = 1
        ORDER BY p.id ASC"
    );

    $items = [];
    foreach ($statement->fetchAll() as $row) {
        $items[] = [
            'id' => $row['slug'],
            'name' => $row['name'],
            'brand' => $row['brand'],
            'category' => $row['category'],
            'price' => (float) $row['price'],
            'pricePrefix' => $row['price_prefix'] ?: '',
            'priceSuffix' => $row['price_suffix'] ?: '',
            'displayPrice' => $row['display_price'],
            'oldPrice' => $row['old_price'] ?: null,
            'saving' => $row['saving'] ?: null,
            'badge' => $row['badge'] ?: null,
            'description' => $row['description'] ?: null,
            'image' => $row['main_image'],
            'gallery' => json_decode($row['gallery_json'] ?: '[]', true) ?: [$row['main_image']],
            'highlights' => json_decode($row['highlights_json'] ?: '[]', true) ?: [],
            'specs' => json_decode($row['specs_json'] ?: '{}', true) ?: [],
            'featured' => (bool) $row['featured'],
            'productType' => $row['product_type'],
        ];
    }

    return $items;
}

function productCard(array $product): string
{
    $highlights = array_slice($product['highlights'], 0, 3);
    $highlightHtml = '';
    $imageAlt = stripos($product['name'], $product['brand']) === 0
        ? $product['name']
        : $product['brand'] . ' ' . $product['name'];

    foreach ($highlights as $highlight) {
        $highlightHtml .= '<li>' . e((string) $highlight) . '</li>';
    }

    return '
        <article class="product-card">
            <img src="' . e($product['image']) . '" alt="' . e($imageAlt) . '" width="620" height="520" loading="lazy">
            <div class="product-body">
                <div class="meta-row">
                    <span>' . e($product['brand']) . '</span>
                    <span>' . e($product['category']) . '</span>
                </div>
                <h3>' . e($product['name']) . '</h3>
                <p class="price">' . e($product['displayPrice']) . '</p>
                <ul class="highlight-list">' . $highlightHtml . '</ul>
                <div class="product-actions">
                    <a class="btn btn-light" href="produktdetail.html?id=' . e($product['id']) . '">Details</a>
                    <button class="btn btn-dark" type="button" data-add="' . e($product['id']) . '">In den Warenkorb</button>
                </div>
            </div>
        </article>
    ';
}

$databaseError = null;
$products = [];
$bundles = [];

try {
    foreach (catalogItems() as $item) {
        if ($item['productType'] === 'bundle') {
            $bundles[] = $item;
        } else {
            $products[] = $item;
        }
    }
} catch (Throwable $error) {
    $databaseError = 'Die Produktdaten konnten nicht aus der MySQL-Datenbank geladen werden. Bitte database.sql importieren und die Zugangsdaten in api/config.php prüfen.';
}
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CampusTech Jena Shop mit Notebooks, Smartphones, Kopfhörern und Zubehör.">
    <title>Shop | CampusTech Jena</title>
    <link rel="stylesheet" href="style.css">
</head>
<body data-page="shop">
    <header class="site-header">
        <a class="brand" href="index.html" aria-label="CampusTech Jena Startseite"><span class="brand-main">Campus</span><span class="brand-accent">Tech</span><span class="brand-place">Jena</span></a>
        <button class="nav-toggle" type="button" aria-label="Menü öffnen" aria-expanded="false">
            <span></span>
            <span></span>
        </button>
        <nav class="site-nav" aria-label="Hauptnavigation">
            <a href="index.html" data-nav="home">Start</a>
            <a href="produkte.php" data-nav="shop">Produkte</a>
            <a href="angebote.html" data-nav="offers">Angebote</a>
            <a href="vergleich.html" data-nav="compare">Vergleich</a>
            <a href="kontakt.html" data-nav="contact">Service</a>
        </nav>
        <button class="cart-indicator" type="button" data-cart-open>
            <img src="images/abstract/cart.svg" alt="" width="22" height="22"> Warenkorb <span data-cart-count>0</span>
        </button>
    </header>

    <main>
        <section class="page-hero">
            <p class="eyebrow">Produkte aus MySQL</p>
            <h1>CampusTech Sortiment.</h1>
            <p>Diese Produktkarten werden von PHP aus der Tabelle <strong>products</strong> aufgebaut.</p>
        </section>

        <button class="filter-toggle" type="button" data-filter-open>Kategorien</button>

        <section class="shop-layout">
            <section class="shop-results">
                <div class="result-bar">
                    <h2>Alle Produkte</h2>
                    <span data-result-count><?= count($products); ?> Produkte</span>
                </div>
                <div class="shop-toolbar" aria-label="Suche und Sortierung">
                    <label for="searchInput">
                        <span>Suche</span>
                        <input id="searchInput" class="input" type="search" placeholder="MacBook, Samsung, Sony">
                    </label>
                    <button class="btn btn-dark search-btn" type="button" data-search-submit>Suchen</button>
                    <label for="sortSelect">
                        <span>Sortierung</span>
                        <select id="sortSelect" class="input">
                            <option value="featured">Empfohlen</option>
                            <option value="price-asc">Preis aufsteigend</option>
                            <option value="price-desc">Preis absteigend</option>
                            <option value="name">Name A-Z</option>
                        </select>
                    </label>
                </div>
                <div class="product-grid" data-product-grid>
                    <?php if ($databaseError): ?>
                        <p class="empty-state"><?= e($databaseError); ?></p>
                    <?php else: ?>
                        <?php foreach ($products as $product): ?>
                            <?= productCard($product); ?>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </section>

            <aside class="filters" aria-label="Kategorie und Filter" data-filter-panel>
                <button class="icon-btn filter-close" type="button" data-filter-close>Schließen</button>
                <h2>Kategorien</h2>
                <div class="category-list" data-category-list>
                    <button class="active" type="button" data-category="all">Alle</button>
                    <button type="button" data-category="Laptops">Laptops</button>
                    <button type="button" data-category="Smartphones">Smartphones</button>
                    <button type="button" data-category="Kopfhörer">Kopfhörer</button>
                    <button type="button" data-category="Audio">Audio</button>
                    <button type="button" data-category="Software">Software</button>
                    <button type="button" data-category="Zubehör">Zubehör</button>
                </div>
            </aside>
        </section>
    </main>

    <footer class="site-footer">
        <p>CampusTech Jena</p>
        <p>Produktkarten werden serverseitig mit PHP und MySQL erzeugt.</p>
        <p><a href="kontakt.html">Kontakt</a></p>
    </footer>

    <aside class="cart-drawer" data-cart-drawer aria-hidden="true">
        <div class="drawer-head">
            <h2>Warenkorb</h2>
            <button class="icon-btn" type="button" data-cart-close>Schließen</button>
        </div>
        <div class="drawer-items" data-cart-items></div>
        <div class="drawer-total">
            <span>Summe</span>
            <strong data-cart-total>0 €</strong>
            <button class="btn btn-dark checkout-btn" type="button" data-checkout-cart>Kaufen</button>
        </div>
    </aside>
    <div class="toast" data-toast></div>
    <script>
        window.CAMPUS_PRODUCTS = <?= json_encode($products, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES); ?>;
        window.CAMPUS_BUNDLES = <?= json_encode($bundles, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES); ?>;
        window.CAMPUS_DATABASE_ERROR = <?= json_encode($databaseError, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES); ?>;
    </script>
    <script src="script.js"></script>
</body>
</html>
