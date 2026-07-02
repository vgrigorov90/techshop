# CampusTech Jena: MySQL-Setup

Dieses Projekt nutzt eine MySQL-Datenbank für den Produktkatalog, Bestellungen und Kontaktanfragen.

## Datenbank importieren

```bash
mysql -u root -p < database.sql
```

Wenn dein lokaler MySQL-Root kein Passwort hat, funktioniert meistens:

```bash
mysql -u root < database.sql
```

## PHP-Server starten

```bash
php -S localhost:8000
```

Danach im Browser öffnen:

```text
http://localhost:8000/index.html
```

Die Produktseite mit serverseitig erzeugten Karten ist:

```text
http://localhost:8000/produkte.php
```

Wichtig: `produkte.php` darf nicht per Doppelklick oder normalem Live-Server geöffnet werden. Wenn der Browser PHP-Code anzeigt oder eine PHP-Datei herunterlädt, läuft kein PHP-Server. In diesem Fall bitte MAMP/XAMPP oder `php -S localhost:8000` verwenden.

## Datenbank-Zugangsdaten

Standardwerte in `api/config.php`:

- Host: `127.0.0.1`
- Datenbank: `campustech_jena`
- Benutzer: `root`
- Passwort: leer

Andere Werte können beim Start gesetzt werden:

```bash
DB_HOST=127.0.0.1 DB_NAME=campustech_jena DB_USER=root DB_PASSWORD=root php -S localhost:8000
```

## Bewertungsrelevante Funktionen

- Schritt 1: `database.sql` erstellt die MySQL-Datenbank mit Tabellen wie `products`, `brands`, `categories`, `orders`, `order_items` und `contact_requests`.
- Schritt 2: `api/config.php` verbindet PHP über PDO mit MySQL.
- Schritt 3: `produkte.php` fragt die Tabelle `products` ab und baut daraus fertige HTML-Produktkarten.
- `api/orders.php` speichert Checkout-Bestellungen mit Positionen in `orders` und `order_items`.
- `api/contact.php` speichert Service-Anfragen aus dem Kontaktformular in `contact_requests`.
- Die Tabellen `products`, `brands`, `categories`, `orders` und `order_items` verwenden Fremdschlüssel für saubere Beziehungen.
