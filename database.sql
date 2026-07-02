CREATE DATABASE IF NOT EXISTS campustech_jena
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE campustech_jena;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS contact_requests;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS brands;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE brands (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL UNIQUE
) ENGINE=InnoDB;

CREATE TABLE categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL UNIQUE
) ENGINE=InnoDB;

CREATE TABLE products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(120) NOT NULL UNIQUE,
    brand_id INT UNSIGNED NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    name VARCHAR(160) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    price_prefix VARCHAR(20) DEFAULT '',
    price_suffix VARCHAR(40) DEFAULT '',
    display_price VARCHAR(80) NOT NULL,
    old_price VARCHAR(80) DEFAULT NULL,
    saving VARCHAR(160) DEFAULT NULL,
    badge VARCHAR(160) DEFAULT NULL,
    description TEXT,
    main_image VARCHAR(255) NOT NULL,
    gallery_json JSON NOT NULL,
    highlights_json JSON NOT NULL,
    specs_json JSON NOT NULL,
    product_type ENUM('product', 'bundle') NOT NULL DEFAULT 'product',
    featured TINYINT(1) NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 20,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_products_brand FOREIGN KEY (brand_id) REFERENCES brands(id),
    CONSTRAINT fk_products_category FOREIGN KEY (category_id) REFERENCES categories(id),
    INDEX idx_products_type_category (product_type, category_id),
    INDEX idx_products_featured (featured)
) ENGINE=InnoDB;

CREATE TABLE orders (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(40) NOT NULL UNIQUE,
    order_type ENUM('cart', 'membership') NOT NULL DEFAULT 'cart',
    payment_method VARCHAR(40) NOT NULL,
    student_discount TINYINT(1) NOT NULL DEFAULT 0,
    total_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE order_items (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id INT UNSIGNED NOT NULL,
    product_id INT UNSIGNED DEFAULT NULL,
    product_slug VARCHAR(120) NOT NULL,
    product_name VARCHAR(160) NOT NULL,
    quantity INT UNSIGNED NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    CONSTRAINT fk_order_items_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL,
    INDEX idx_order_items_order (order_id)
) ENGINE=InnoDB;

CREATE TABLE contact_requests (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(160) NOT NULL,
    subject VARCHAR(160) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status ENUM('new', 'answered', 'closed') NOT NULL DEFAULT 'new'
) ENGINE=InnoDB;

INSERT INTO brands (name) VALUES
('Apple'), ('Lenovo'), ('Dell'), ('ASUS'), ('Samsung'), ('Xiaomi'), ('Google'),
('Sony'), ('Logitech'), ('Herschel'), ('Anker'), ('HP'), ('JBL'), ('Microsoft'),
('CampusTech');

INSERT INTO categories (name) VALUES
('Laptops'), ('Smartphones'), ('Kopfhörer'), ('Zubehör'), ('Audio'), ('Software'), ('Bundle');

INSERT INTO products
(slug, brand_id, category_id, name, price, price_prefix, price_suffix, display_price, old_price, saving, badge, description, main_image, gallery_json, highlights_json, specs_json, product_type, featured, stock)
VALUES
('macbook-air', (SELECT id FROM brands WHERE name = 'Apple'), (SELECT id FROM categories WHERE name = 'Laptops'), 'MacBook Air 13"', 1199.00, 'ab ', '', 'ab 1.199 €', NULL, NULL, NULL, NULL, 'images/products/macbook_air_13_1.webp', JSON_ARRAY('images/products/macbook_air_13_1.webp', 'images/products/macbook_air_13_2.webp', 'images/products/macbook_air_3.webp'), JSON_ARRAY('Apple M4', '13,6" Liquid Retina', 'bis zu 18 Std. Akku'), JSON_OBJECT('Display', '13,6" Liquid Retina', 'Prozessor', 'Apple M4', 'Speicher', 'ab 16 GB RAM / 256 GB SSD', 'Akku', 'bis zu 18 Std.', 'Kamera', '12 MP Center Stage', 'Einsatz', 'Studium und mobiles Arbeiten'), 'product', 1, 12),
('thinkpad-e16-gen-3', (SELECT id FROM brands WHERE name = 'Lenovo'), (SELECT id FROM categories WHERE name = 'Laptops'), 'ThinkPad E16 Gen 3', 999.00, '', '', '999 €', NULL, NULL, NULL, NULL, 'images/products/lenovo-thinkpad-e16-gen-3_1.webp', JSON_ARRAY('images/products/lenovo-thinkpad-e16-gen-3_1.webp', 'images/products/lenovo-thinkpad-e16-gen-3_2.webp', 'images/products/lenovo-thinkpad-e16-gen-3_3.webp'), JSON_ARRAY('16" WUXGA', 'Intel Core Ultra', 'Business-Tastatur'), JSON_OBJECT('Display', '16" WUXGA IPS', 'Prozessor', 'Intel Core Ultra / Core 5', 'Speicher', 'bis 64 GB RAM möglich', 'Akku', 'ganzer Uni- und Office-Tag', 'Kamera', 'FHD-Webcam', 'Einsatz', 'Office, Projektarbeit, Verwaltung'), 'product', 1, 15),
('dell-16-intel-5', (SELECT id FROM brands WHERE name = 'Dell'), (SELECT id FROM categories WHERE name = 'Laptops'), 'Dell 16 Intel 5', 899.00, '', '', '899 €', NULL, NULL, NULL, NULL, 'images/products/dell-16-intel-5_1.webp', JSON_ARRAY('images/products/dell-16-intel-5_1.webp', 'images/products/dell-16-intel-5_2.webp', 'images/products/dell-16-intel-5_3.webp'), JSON_ARRAY('16" Display', 'Intel Core 5', '512 GB SSD'), JSON_OBJECT('Display', '16" Full-HD+', 'Prozessor', 'Intel Core 5', 'Speicher', '512 GB SSD', 'Akku', 'solider Homeoffice-Tag', 'Kamera', 'FHD-Webcam', 'Einsatz', 'Homeoffice und Alltag'), 'product', 0, 10),
('asus-zenbook-14', (SELECT id FROM brands WHERE name = 'ASUS'), (SELECT id FROM categories WHERE name = 'Laptops'), 'Zenbook 14 OLED', 1099.00, '', '', '1.099 €', NULL, NULL, NULL, NULL, 'images/products/asus-zenbook-14_1.webp', JSON_ARRAY('images/products/asus-zenbook-14_1.webp', 'images/products/asus-zenbook-14_2.webp', 'images/products/asus-zenbook-14_3.webp'), JSON_ARRAY('14" OLED', 'Intel Core Ultra', 'leichtes Alu-Gehäuse'), JSON_OBJECT('Display', '14" OLED', 'Prozessor', 'Intel Core Ultra', 'Speicher', '16 GB RAM / 1 TB SSD', 'Akku', 'mobiler Arbeitstag', 'Kamera', 'FHD IR-Webcam', 'Einsatz', 'Studium, Office und kreatives Arbeiten'), 'product', 1, 9),
('galaxy-s25-ultra', (SELECT id FROM brands WHERE name = 'Samsung'), (SELECT id FROM categories WHERE name = 'Smartphones'), 'Galaxy S25 Ultra', 1399.00, '', '', '1.399 €', NULL, NULL, NULL, NULL, 'images/products/samsung-galaxy-s25-ultra_1.webp', JSON_ARRAY('images/products/samsung-galaxy-s25-ultra_1.webp', 'images/products/samsung-galaxy-s25-ultra_2.webp', 'images/products/samsung-galaxy-s25-ultra_3.webp'), JSON_ARRAY('6,9" AMOLED 2X', '200 MP Kamera', 'S Pen'), JSON_OBJECT('Display', '6,9" Dynamic AMOLED 2X', 'Prozessor', 'Snapdragon 8 Elite for Galaxy', 'Speicher', 'ab 256 GB', 'Kamera', '200 MP + 50 MP Ultraweitwinkel', 'Akku', '5000 mAh', 'Einsatz', 'Foto und Produktivität'), 'product', 1, 7),
('iphone-17', (SELECT id FROM brands WHERE name = 'Apple'), (SELECT id FROM categories WHERE name = 'Smartphones'), 'iPhone 17', 949.00, '', '', '949 €', NULL, NULL, NULL, NULL, 'images/products/apple-iphone-17_1.webp', JSON_ARRAY('images/products/apple-iphone-17_1.webp', 'images/products/apple-iphone-17_2.webp', 'images/products/apple-iphone-17_3.webp'), JSON_ARRAY('Super Retina XDR', 'A19 Chip', '48 MP Kamera'), JSON_OBJECT('Display', 'Super Retina XDR', 'Prozessor', 'Apple A19', 'Speicher', 'ab 128 GB', 'Kamera', '48 MP Hauptkamera', 'Akku', 'All-Day Battery', 'Einsatz', 'Premium-Smartphone für Alltag und Uni'), 'product', 1, 8),
('redmi-note-14', (SELECT id FROM brands WHERE name = 'Xiaomi'), (SELECT id FROM categories WHERE name = 'Smartphones'), 'Redmi Note 14', 199.00, 'ab ', '', 'ab 199 €', NULL, NULL, NULL, NULL, 'images/products/xiaomi-redmi-note-14_1.webp', JSON_ARRAY('images/products/xiaomi-redmi-note-14_1.webp', 'images/products/xiaomi-redmi-note-14_2.webp', 'images/products/xiaomi-redmi-note-14_3.webp'), JSON_ARRAY('6,67" AMOLED', '120 Hz', '5.500 mAh Akku'), JSON_OBJECT('Display', '6,67" AMOLED, 120 Hz', 'Prozessor', 'MediaTek Helio G99-Ultra', 'Speicher', 'ab 128 GB', 'Kamera', '108 MP Hauptkamera', 'Akku', '5.500 mAh', 'Einsatz', 'Budget-Smartphone für Alltag'), 'product', 1, 18),
('google-pixel-8a', (SELECT id FROM brands WHERE name = 'Google'), (SELECT id FROM categories WHERE name = 'Smartphones'), 'Pixel 8a', 499.00, '', '', '499 €', NULL, NULL, NULL, NULL, 'images/products/google-pixel-8a_1.webp', JSON_ARRAY('images/products/google-pixel-8a_1.webp', 'images/products/google-pixel-8a_2.webp', 'images/products/google-pixel-8a_3.webp'), JSON_ARRAY('Google Tensor G3', 'AI-Kamera', '7 Jahre Updates'), JSON_OBJECT('Display', '6,1" OLED', 'Prozessor', 'Google Tensor G3', 'Speicher', '128 GB', 'Kamera', '64 MP Dual-Kamera', 'Akku', '24+ Std.', 'Einsatz', 'smarte Uni- und Alltagspower'), 'product', 0, 11),
('sony-wh-1000xm6', (SELECT id FROM brands WHERE name = 'Sony'), (SELECT id FROM categories WHERE name = 'Kopfhörer'), 'WH-1000XM6', 449.00, '', '', '449 €', NULL, NULL, NULL, NULL, 'images/products/sony-wh-1000xm6_1.webp', JSON_ARRAY('images/products/sony-wh-1000xm6_1.webp', 'images/products/sony-wh-1000xm6_2.webp', 'images/products/sony-wh-1000xm6_3.webp'), JSON_ARRAY('QN3 Noise Cancelling', 'Bluetooth 5.3', 'bis zu 30 Std.'), JSON_OBJECT('Typ', 'Over-Ear', 'Akku', 'bis zu 30 Std.', 'Verbindung', 'Bluetooth 5.3, LDAC', 'Einsatz', 'Reisen und Fokus'), 'product', 1, 13),
('logitech-mx-master-3s', (SELECT id FROM brands WHERE name = 'Logitech'), (SELECT id FROM categories WHERE name = 'Zubehör'), 'MX Master 3S', 89.00, '', '', '89 €', NULL, NULL, NULL, NULL, 'images/products/logitech-mx-master-3s_1.webp', JSON_ARRAY('images/products/logitech-mx-master-3s_1.webp', 'images/products/logitech-mx-master-3s_2.webp', 'images/products/logitech-mx-master-3s_3.webp'), JSON_ARRAY('8K-DPI-Sensor', 'leise Klicks', 'USB-C Schnellladen'), JSON_OBJECT('Typ', 'kabellose Maus', 'Sensor', 'Darkfield, bis 8.000 DPI', 'Verbindung', 'Bluetooth / Logi Bolt', 'Einsatz', 'Produktives Arbeiten'), 'product', 0, 25),
('herschel-retreat-backpack', (SELECT id FROM brands WHERE name = 'Herschel'), (SELECT id FROM categories WHERE name = 'Zubehör'), 'Retreat Backpack', 89.00, '', '', '89 €', NULL, NULL, NULL, NULL, 'images/products/herschel-retreat-youth_1.webp', JSON_ARRAY('images/products/herschel-retreat-youth_1.webp', 'images/products/herschel-retreat-youth_2.webp', 'images/products/herschel-retreat-youth_3.webp'), JSON_ARRAY('Laptopfach', 'Campus-Format', 'robustes Material'), JSON_OBJECT('Typ', 'Rucksack', 'Volumen', 'kompakt für Campus und Alltag', 'Fach', 'Laptopfach', 'Einsatz', 'Transport und Uni-Alltag'), 'product', 0, 16),
('anker-prime-powerbank-20000', (SELECT id FROM brands WHERE name = 'Anker'), (SELECT id FROM categories WHERE name = 'Zubehör'), 'Prime Powerbank 20000', 89.00, '', '', '89 €', NULL, NULL, NULL, NULL, 'images/products/anker-735-prime-power-bank-20000_1.webp', JSON_ARRAY('images/products/anker-735-prime-power-bank-20000_1.webp', 'images/products/anker-735-prime-power-bank-20000_2.webp', 'images/products/anker-735-prime-power-bank-20000_3.webp'), JSON_ARRAY('20.000 mAh', 'USB-C', 'für lange Arbeitstage'), JSON_OBJECT('Typ', 'Powerbank', 'Kapazitaet', '20.000 mAh', 'Anschluss', 'USB-C', 'Einsatz', 'Mobiles Laden'), 'product', 0, 22),
('hp-z3700', (SELECT id FROM brands WHERE name = 'HP'), (SELECT id FROM categories WHERE name = 'Zubehör'), 'Z3700 Wireless Mouse', 29.00, '', '', '29 €', NULL, NULL, NULL, NULL, 'images/products/hpz3700_1.webp', JSON_ARRAY('images/products/hpz3700_1.webp', 'images/products/hpz3700_2.webp', 'images/products/hpz3700_3.webp'), JSON_ARRAY('kabellos', 'flaches Design', 'mobile Office-Maus'), JSON_OBJECT('Typ', 'kabellose Maus', 'Verbindung', 'USB-Wireless', 'Einsatz', 'Campus, Reisen und Office'), 'product', 0, 35),
('jbl-charge-5', (SELECT id FROM brands WHERE name = 'JBL'), (SELECT id FROM categories WHERE name = 'Audio'), 'Charge 5', 149.00, '', '', '149 €', NULL, NULL, NULL, NULL, 'images/products/jbl-charge-5_1.webp', JSON_ARRAY('images/products/jbl-charge-5_1.webp', 'images/products/jbl-charge-5_2.webp', 'images/products/jbl-charge-5_3.webp'), JSON_ARRAY('Bluetooth Speaker', 'IP67', 'bis zu 20 Std.'), JSON_OBJECT('Typ', 'Bluetooth-Lautsprecher', 'Akku', 'bis zu 20 Std.', 'Einsatz', 'WG, Outdoor und Campus'), 'product', 0, 17),
('power-bi-pro', (SELECT id FROM brands WHERE name = 'Microsoft'), (SELECT id FROM categories WHERE name = 'Software'), 'Power BI Pro', 39.00, '', '', '39 €', NULL, NULL, NULL, NULL, 'images/products/Power-BI-Pro.jpg', JSON_ARRAY('images/products/Power-BI-Pro.jpg'), JSON_ARRAY('Dashboards', 'Datenanalyse', 'Reporting'), JSON_OBJECT('Typ', 'Analytics-Software', 'Einsatz', 'Business Analytics und Reporting', 'Plattform', 'Microsoft Power BI'), 'product', 0, 100),
('windows-11-pro-upgrade', (SELECT id FROM brands WHERE name = 'Microsoft'), (SELECT id FROM categories WHERE name = 'Software'), 'Windows 11 Pro Upgrade', 49.00, '', '', '49 €', NULL, NULL, NULL, NULL, 'images/products/windows-11-pro.jpg', JSON_ARRAY('images/products/windows-11-pro.jpg'), JSON_ARRAY('BitLocker', 'Remote Desktop', 'Pro-Funktionen'), JSON_OBJECT('Typ', 'Betriebssystem-Upgrade', 'Einsatz', 'Business, Uni und Homeoffice', 'Plattform', 'Windows'), 'product', 0, 100),
('student-bundle', (SELECT id FROM brands WHERE name = 'CampusTech'), (SELECT id FROM categories WHERE name = 'Bundle'), 'Student Bundle', 999.00, '', '', '999 €', '1.177 €', '178 € sparen + Office 365 kostenlos', NULL, 'Ideal für Studierende, Programmierung, Online-Vorlesungen und den täglichen Uni-Alltag.', 'images/abstract/student-bundle.svg', JSON_ARRAY('images/products/lenovo-thinkpad-e16-gen-3_2.webp', 'images/products/logitech-mx-master-3s_1.webp', 'images/products/herschel-retreat-youth_1.webp', 'images/products/microsoft_office.jpg'), JSON_ARRAY('Lenovo ThinkPad E16 Gen 3', 'Logitech MX Master 3S', 'Herschel Retreat Backpack', 'Microsoft Office 365 kostenlos'), JSON_OBJECT('Produkte', 'ThinkPad E16 Gen 3, MX Master 3S, Herschel Retreat Backpack', 'Software', 'Microsoft Office 365 kostenlos inklusive', 'Vorteil', '178 € sparen + kostenloses Office 365', 'Einsatz', 'Studium'), 'bundle', 0, 10),
('homeoffice-bundle', (SELECT id FROM brands WHERE name = 'CampusTech'), (SELECT id FROM categories WHERE name = 'Bundle'), 'Homeoffice Bundle', 1299.00, '', '', '1.299 €', '1.526 €', '227 € sparen + Office 365 & Windows 11 Pro kostenlos', NULL, 'Perfekt für Remote Work, Videomeetings und produktive Homeoffice-Setups.', 'images/abstract/homeoffice-bundle.svg', JSON_ARRAY('images/products/dell-16-intel-5_1.webp', 'images/products/sony-wh-1000xm6_1.webp', 'images/products/logitech-mx-master-3s_2.webp', 'images/products/anker-735-prime-power-bank-20000_1.webp', 'images/products/microsoft_office.jpg', 'images/products/windows-11-pro.jpg'), JSON_ARRAY('Dell 16', 'Sony WH-1000XM6', 'Logitech MX Master 3S', 'Anker Prime Powerbank 20000', 'Office 365 + Windows 11 Pro kostenlos'), JSON_OBJECT('Produkte', 'Dell 16, Sony WH-1000XM6, MX Master 3S, Anker Prime Powerbank 20000', 'Software', 'Microsoft Office 365 und Windows 11 Pro Upgrade kostenlos inklusive', 'Vorteil', '227 € sparen + kostenlose Software', 'Einsatz', 'Homeoffice'), 'bundle', 0, 8),
('business-analytics-bundle', (SELECT id FROM brands WHERE name = 'CampusTech'), (SELECT id FROM categories WHERE name = 'Bundle'), 'Business Analytics Bundle', 999.00, '', '', '999 €', '1.176 €', '177 € sparen + Office 365 kostenlos', 'Empfohlen für Wirtschaftsinformatik', 'Empfohlen für Business Analytics, Datenanalyse, Power BI und Wirtschaftsinformatik.', 'images/abstract/business_analytics_bundle.svg', JSON_ARRAY('images/products/lenovo-thinkpad-e16-gen-3_1.webp', 'images/products/logitech-mx-master-3s_1.webp', 'images/products/Power-BI-Pro.jpg', 'images/products/windows-11-pro.jpg', 'images/products/microsoft_office.jpg'), JSON_ARRAY('Lenovo ThinkPad E16 Gen 3', 'Logitech MX Master 3S', 'Power BI Pro', 'Windows 11 Pro Upgrade', 'Microsoft Office 365 kostenlos'), JSON_OBJECT('Produkte', 'ThinkPad E16 Gen 3, MX Master 3S, Power BI Pro, Windows 11 Pro Upgrade', 'Software', 'Microsoft Office 365 kostenlos inklusive', 'Vorteil', '177 € sparen + kostenloses Office 365', 'Einsatz', 'Business Analytics und Wirtschaftsinformatik'), 'bundle', 0, 8),
('premium-bundle', (SELECT id FROM brands WHERE name = 'CampusTech'), (SELECT id FROM categories WHERE name = 'Bundle'), 'Premium Bundle', 2699.00, '', '', '2.699 €', '3.047 €', '348 € sparen + Office 365 kostenlos', NULL, 'High-end Setup für mobiles Arbeiten, Fotografie, Uni und Premium-Alltag.', 'images/abstract/premium_bundle.svg', JSON_ARRAY('images/products/samsung-galaxy-s25-ultra_2.webp', 'images/products/macbook_air_13_1.webp', 'images/products/sony-wh-1000xm6_2.webp', 'images/products/microsoft_office.jpg'), JSON_ARRAY('Galaxy S25 Ultra', 'MacBook Air 13" M4', 'Sony WH-1000XM6', 'Microsoft Office 365 kostenlos'), JSON_OBJECT('Produkte', 'Galaxy S25 Ultra, MacBook Air 13" M4, Sony WH-1000XM6', 'Software', 'Microsoft Office 365 kostenlos inklusive', 'Vorteil', '348 € sparen + kostenloses Office 365', 'Einsatz', 'Premium Alltag'), 'bundle', 0, 5),
('ai-productivity-pack', (SELECT id FROM brands WHERE name = 'CampusTech'), (SELECT id FROM categories WHERE name = 'Bundle'), 'AI Productivity Pack', 24.99, '', '/Monat', '24,99 €/Monat', NULL, 'KI-Tools im Monatsbundle', NULL, 'KI-Unterstützung für Studium, Schreiben, Recherche und Produktivität.', 'images/abstract/ai_producivity_pack.svg', JSON_ARRAY('images/products/Chat-GPT.webp', 'images/products/Claude.webp', 'images/products/Microsoft-Copilot.png'), JSON_ARRAY('ChatGPT Plus', 'Claude Pro', 'Microsoft Copilot Pro'), JSON_OBJECT('Enthalten', 'ChatGPT Plus, Claude Pro und Microsoft Copilot Pro', 'Abrechnung', 'monatlich kündbar', 'Vorteil', 'KI-Unterstützung für Studium, Schreiben, Recherche und Produktivität', 'Einsatz', 'AI Productivity'), 'bundle', 0, 30);
