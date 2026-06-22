const products = [
    {
        id: "macbook-air",
        name: "MacBook Air 13\"",
        brand: "Apple",
        category: "Laptops",
        price: 1199,
        pricePrefix: "ab ",
        displayPrice: "ab 1.199 €",
        image: "images/products/macbook_air_13_1.webp",
        gallery: ["images/products/macbook_air_13_1.webp", "images/products/macbook_air_13_2.webp", "images/products/macbook_air_3.webp"],
        highlights: ["Apple M4", "13,6\" Liquid Retina", "bis zu 18 Std. Akku"],
        specs: {
            Display: "13,6\" Liquid Retina",
            Prozessor: "Apple M4",
            Speicher: "ab 16 GB RAM / 256 GB SSD",
            Akku: "bis zu 18 Std.",
            Kamera: "12 MP Center Stage",
            Einsatz: "Studium und mobiles Arbeiten"
        },
        featured: true
    },
    {
        id: "thinkpad-e16-gen-3",
        name: "ThinkPad E16 Gen 3",
        brand: "Lenovo",
        category: "Laptops",
        price: 999,
        displayPrice: "999 €",
        image: "images/products/lenovo-thinkpad-e16-gen-3_1.webp",
        gallery: ["images/products/lenovo-thinkpad-e16-gen-3_1.webp", "images/products/lenovo-thinkpad-e16-gen-3_2.webp", "images/products/lenovo-thinkpad-e16-gen-3_3.webp"],
        highlights: ["16\" WUXGA", "Intel Core Ultra", "Business-Tastatur"],
        specs: {
            Display: "16\" WUXGA IPS",
            Prozessor: "Intel Core Ultra / Core 5",
            Speicher: "bis 64 GB RAM möglich",
            Akku: "ganzer Uni- und Office-Tag",
            Kamera: "FHD-Webcam",
            Einsatz: "Office, Projektarbeit, Verwaltung"
        },
        featured: true
    },
    {
        id: "dell-16-intel-5",
        name: "Dell 16 Intel 5",
        brand: "Dell",
        category: "Laptops",
        price: 899,
        displayPrice: "899 €",
        image: "images/products/dell-16-intel-5_1.webp",
        gallery: ["images/products/dell-16-intel-5_1.webp", "images/products/dell-16-intel-5_2.webp", "images/products/dell-16-intel-5_3.webp"],
        highlights: ["16\" Display", "Intel Core 5", "512 GB SSD"],
        specs: {
            Display: "16\" Full-HD+",
            Prozessor: "Intel Core 5",
            Speicher: "512 GB SSD",
            Akku: "solider Homeoffice-Tag",
            Kamera: "FHD-Webcam",
            Einsatz: "Homeoffice und Alltag"
        },
        featured: false
    },
    {
        id: "asus-zenbook-14",
        name: "Zenbook 14 OLED",
        brand: "ASUS",
        category: "Laptops",
        price: 1099,
        displayPrice: "1.099 €",
        image: "images/products/asus-zenbook-14_1.webp",
        gallery: ["images/products/asus-zenbook-14_1.webp", "images/products/asus-zenbook-14_2.webp", "images/products/asus-zenbook-14_3.webp"],
        highlights: ["14\" OLED", "Intel Core Ultra", "leichtes Alu-Gehäuse"],
        specs: {
            Display: "14\" OLED",
            Prozessor: "Intel Core Ultra",
            Speicher: "16 GB RAM / 1 TB SSD",
            Akku: "mobiler Arbeitstag",
            Kamera: "FHD IR-Webcam",
            Einsatz: "Studium, Office und kreatives Arbeiten"
        },
        featured: true
    },
    {
        id: "galaxy-s25-ultra",
        name: "Galaxy S25 Ultra",
        brand: "Samsung",
        category: "Smartphones",
        price: 1399,
        displayPrice: "1.399 €",
        image: "images/products/samsung-galaxy-s25-ultra_1.webp",
        gallery: ["images/products/samsung-galaxy-s25-ultra_1.webp", "images/products/samsung-galaxy-s25-ultra_2.webp", "images/products/samsung-galaxy-s25-ultra_3.webp"],
        highlights: ["6,9\" AMOLED 2X", "200 MP Kamera", "S Pen"],
        specs: {
            Display: "6,9\" Dynamic AMOLED 2X",
            Prozessor: "Snapdragon 8 Elite for Galaxy",
            Speicher: "ab 256 GB",
            Kamera: "200 MP + 50 MP Ultraweitwinkel",
            Akku: "5000 mAh",
            Einsatz: "Foto und Produktivität"
        },
        featured: true
    },
    {
        id: "iphone-17",
        name: "iPhone 17",
        brand: "Apple",
        category: "Smartphones",
        price: 949,
        displayPrice: "949 €",
        image: "images/products/apple-iphone-17_1.webp",
        gallery: ["images/products/apple-iphone-17_1.webp", "images/products/apple-iphone-17_2.webp", "images/products/apple-iphone-17_3.webp"],
        highlights: ["Super Retina XDR", "A19 Chip", "48 MP Kamera"],
        specs: {
            Display: "Super Retina XDR",
            Prozessor: "Apple A19",
            Speicher: "ab 128 GB",
            Kamera: "48 MP Hauptkamera",
            Akku: "All-Day Battery",
            Einsatz: "Premium-Smartphone für Alltag und Uni"
        },
        featured: true
    },
    {
        id: "redmi-note-14",
        name: "Redmi Note 14",
        brand: "Xiaomi",
        category: "Smartphones",
        price: 199,
        pricePrefix: "ab ",
        displayPrice: "ab 199 €",
        image: "images/products/xiaomi-redmi-note-14_1.webp",
        gallery: ["images/products/xiaomi-redmi-note-14_1.webp", "images/products/xiaomi-redmi-note-14_2.webp", "images/products/xiaomi-redmi-note-14_3.webp"],
        highlights: ["6,67\" AMOLED", "120 Hz", "5.500 mAh Akku"],
        specs: {
            Display: "6,67\" AMOLED, 120 Hz",
            Prozessor: "MediaTek Helio G99-Ultra",
            Speicher: "ab 128 GB",
            Kamera: "108 MP Hauptkamera",
            Akku: "5.500 mAh",
            Einsatz: "Budget-Smartphone für Alltag"
        },
        featured: true
    },
    {
        id: "google-pixel-8a",
        name: "Pixel 8a",
        brand: "Google",
        category: "Smartphones",
        price: 499,
        displayPrice: "499 €",
        image: "images/products/google-pixel-8a_1.webp",
        gallery: ["images/products/google-pixel-8a_1.webp", "images/products/google-pixel-8a_2.webp", "images/products/google-pixel-8a_3.webp"],
        highlights: ["Google Tensor G3", "AI-Kamera", "7 Jahre Updates"],
        specs: {
            Display: "6,1\" OLED",
            Prozessor: "Google Tensor G3",
            Speicher: "128 GB",
            Kamera: "64 MP Dual-Kamera",
            Akku: "24+ Std.",
            Einsatz: "smarte Uni- und Alltagspower"
        },
        featured: false
    },
    {
        id: "sony-wh-1000xm6",
        name: "WH-1000XM6",
        brand: "Sony",
        category: "Kopfhörer",
        price: 449,
        displayPrice: "449 €",
        image: "images/products/sony-wh-1000xm6_1.webp",
        gallery: ["images/products/sony-wh-1000xm6_1.webp", "images/products/sony-wh-1000xm6_2.webp", "images/products/sony-wh-1000xm6_3.webp"],
        highlights: ["QN3 Noise Cancelling", "Bluetooth 5.3", "bis zu 30 Std."],
        specs: {
            Typ: "Over-Ear",
            Akku: "bis zu 30 Std.",
            Verbindung: "Bluetooth 5.3, LDAC",
            Einsatz: "Reisen und Fokus"
        },
        featured: true
    },
    {
        id: "logitech-mx-master-3s",
        name: "MX Master 3S",
        brand: "Logitech",
        category: "Zubehör",
        price: 89,
        displayPrice: "89 €",
        image: "images/products/logitech-mx-master-3s_1.webp",
        gallery: ["images/products/logitech-mx-master-3s_1.webp", "images/products/logitech-mx-master-3s_2.webp", "images/products/logitech-mx-master-3s_3.webp"],
        highlights: ["8K-DPI-Sensor", "leise Klicks", "USB-C Schnellladen"],
        specs: {
            Typ: "kabellose Maus",
            Sensor: "Darkfield, bis 8.000 DPI",
            Verbindung: "Bluetooth / Logi Bolt",
            Einsatz: "Produktives Arbeiten"
        },
        featured: false
    },
    {
        id: "herschel-retreat-backpack",
        name: "Retreat Backpack",
        brand: "Herschel",
        category: "Zubehör",
        price: 89,
        displayPrice: "89 €",
        image: "images/products/herschel-retreat-youth_1.webp",
        gallery: ["images/products/herschel-retreat-youth_1.webp", "images/products/herschel-retreat-youth_2.webp", "images/products/herschel-retreat-youth_3.webp"],
        highlights: ["Laptopfach", "Campus-Format", "robustes Material"],
        specs: {
            Typ: "Rucksack",
            Volumen: "kompakt für Campus und Alltag",
            Fach: "Laptopfach",
            Einsatz: "Transport und Uni-Alltag"
        },
        featured: false
    },
    {
        id: "anker-prime-powerbank-20000",
        name: "Prime Powerbank 20000",
        brand: "Anker",
        category: "Zubehör",
        price: 89,
        displayPrice: "89 €",
        image: "images/products/anker-735-prime-power-bank-20000_1.webp",
        gallery: ["images/products/anker-735-prime-power-bank-20000_1.webp", "images/products/anker-735-prime-power-bank-20000_2.webp", "images/products/anker-735-prime-power-bank-20000_3.webp"],
        highlights: ["20.000 mAh", "USB-C", "für lange Arbeitstage"],
        specs: {
            Typ: "Powerbank",
            Kapazitaet: "20.000 mAh",
            Anschluss: "USB-C",
            Einsatz: "Mobiles Laden"
        },
        featured: false
    },
    {
        id: "hp-z3700",
        name: "Z3700 Wireless Mouse",
        brand: "HP",
        category: "Zubehör",
        price: 29,
        displayPrice: "29 €",
        image: "images/products/hpz3700_1.webp",
        gallery: ["images/products/hpz3700_1.webp", "images/products/hpz3700_2.webp", "images/products/hpz3700_3.webp"],
        highlights: ["kabellos", "flaches Design", "mobile Office-Maus"],
        specs: {
            Typ: "kabellose Maus",
            Verbindung: "USB-Wireless",
            Einsatz: "Campus, Reisen und Office"
        },
        featured: false
    },
    {
        id: "jbl-charge-5",
        name: "Charge 5",
        brand: "JBL",
        category: "Audio",
        price: 149,
        displayPrice: "149 €",
        image: "images/products/jbl-charge-5_1.webp",
        gallery: ["images/products/jbl-charge-5_1.webp", "images/products/jbl-charge-5_2.webp", "images/products/jbl-charge-5_3.webp"],
        highlights: ["Bluetooth Speaker", "IP67", "bis zu 20 Std."],
        specs: {
            Typ: "Bluetooth-Lautsprecher",
            Akku: "bis zu 20 Std.",
            Einsatz: "WG, Outdoor und Campus"
        },
        featured: false
    },
    {
        id: "power-bi-pro",
        name: "Power BI Pro",
        brand: "Microsoft",
        category: "Software",
        price: 39,
        displayPrice: "39 €",
        image: "images/products/Power-BI-Pro.jpg",
        gallery: ["images/products/Power-BI-Pro.jpg"],
        highlights: ["Dashboards", "Datenanalyse", "Reporting"],
        specs: {
            Typ: "Analytics-Software",
            Einsatz: "Business Analytics und Reporting",
            Plattform: "Microsoft Power BI"
        },
        featured: false
    },
    {
        id: "windows-11-pro-upgrade",
        name: "Windows 11 Pro Upgrade",
        brand: "Microsoft",
        category: "Software",
        price: 49,
        displayPrice: "49 €",
        image: "images/products/windows-11-pro.jpg",
        gallery: ["images/products/windows-11-pro.jpg"],
        highlights: ["BitLocker", "Remote Desktop", "Pro-Funktionen"],
        specs: {
            Typ: "Betriebssystem-Upgrade",
            Einsatz: "Business, Uni und Homeoffice",
            Plattform: "Windows"
        },
        featured: false
    }
];

const bundles = [
    {
        id: "student-bundle",
        name: "Student Bundle",
        brand: "CampusTech",
        category: "Bundle",
        price: 999,
        displayPrice: "999 €",
        oldPrice: "1.177 €",
        saving: "178 € sparen + Office 365 kostenlos",
        image: "images/abstract/student-bundle.svg",
        gallery: ["images/products/lenovo-thinkpad-e16-gen-3_2.webp", "images/products/logitech-mx-master-3s_1.webp", "images/products/herschel-retreat-youth_1.webp", "images/products/microsoft_office.jpg"],
        description: "Ideal für Studierende, Programmierung, Online-Vorlesungen und den täglichen Uni-Alltag.",
        highlights: ["Lenovo ThinkPad E16 Gen 3", "Logitech MX Master 3S", "Herschel Retreat Backpack", "Microsoft Office 365 kostenlos"],
        specs: {
            Produkte: "ThinkPad E16 Gen 3, MX Master 3S, Herschel Retreat Backpack",
            Software: "Microsoft Office 365 kostenlos inklusive",
            Vorteil: "178 € sparen + kostenloses Office 365",
            Einsatz: "Studium"
        },
        featured: false
    },
    {
        id: "homeoffice-bundle",
        name: "Homeoffice Bundle",
        brand: "CampusTech",
        category: "Bundle",
        price: 1299,
        displayPrice: "1.299 €",
        oldPrice: "1.526 €",
        saving: "227 € sparen + Office 365 & Windows 11 Pro kostenlos",
        image: "images/abstract/homeoffice-bundle.svg",
        gallery: ["images/products/dell-16-intel-5_1.webp", "images/products/sony-wh-1000xm6_1.webp", "images/products/logitech-mx-master-3s_2.webp", "images/products/anker-735-prime-power-bank-20000_1.webp", "images/products/microsoft_office.jpg", "images/products/windows-11-pro.jpg"],
        description: "Perfekt für Remote Work, Videomeetings und produktive Homeoffice-Setups.",
        highlights: ["Dell 16", "Sony WH-1000XM6", "Logitech MX Master 3S", "Anker Prime Powerbank 20000", "Office 365 + Windows 11 Pro kostenlos"],
        specs: {
            Produkte: "Dell 16, Sony WH-1000XM6, MX Master 3S, Anker Prime Powerbank 20000",
            Software: "Microsoft Office 365 und Windows 11 Pro Upgrade kostenlos inklusive",
            Vorteil: "227 € sparen + kostenlose Software",
            Einsatz: "Homeoffice"
        },
        featured: false
    },
    {
        id: "business-analytics-bundle",
        name: "Business Analytics Bundle",
        brand: "CampusTech",
        category: "Bundle",
        price: 999,
        displayPrice: "999 €",
        oldPrice: "1.176 €",
        saving: "177 € sparen + Office 365 kostenlos",
        image: "images/abstract/business_analytics_bundle.svg",
        badge: "Empfohlen für Wirtschaftsinformatik",
        gallery: ["images/products/lenovo-thinkpad-e16-gen-3_1.webp", "images/products/logitech-mx-master-3s_1.webp", "images/products/Power-BI-Pro.jpg", "images/products/windows-11-pro.jpg", "images/products/microsoft_office.jpg"],
        description: "Empfohlen für Business Analytics, Datenanalyse, Power BI und Wirtschaftsinformatik.",
        highlights: ["Lenovo ThinkPad E16 Gen 3", "Logitech MX Master 3S", "Power BI Pro", "Windows 11 Pro Upgrade", "Microsoft Office 365 kostenlos"],
        specs: {
            Produkte: "ThinkPad E16 Gen 3, MX Master 3S, Power BI Pro, Windows 11 Pro Upgrade",
            Software: "Microsoft Office 365 kostenlos inklusive",
            Vorteil: "177 € sparen + kostenloses Office 365",
            Einsatz: "Business Analytics und Wirtschaftsinformatik"
        },
        featured: false
    },
    {
        id: "premium-bundle",
        name: "Premium Bundle",
        brand: "CampusTech",
        category: "Bundle",
        price: 2699,
        displayPrice: "2.699 €",
        oldPrice: "3.047 €",
        saving: "348 € sparen + Office 365 kostenlos",
        image: "images/abstract/premium_bundle.svg",
        gallery: ["images/products/samsung-galaxy-s25-ultra_2.webp", "images/products/macbook_air_13_1.webp", "images/products/sony-wh-1000xm6_2.webp", "images/products/microsoft_office.jpg"],
        description: "High-end Setup für mobiles Arbeiten, Fotografie, Uni und Premium-Alltag.",
        highlights: ["Galaxy S25 Ultra", "MacBook Air 13\" M4", "Sony WH-1000XM6", "Microsoft Office 365 kostenlos"],
        specs: {
            Produkte: "Galaxy S25 Ultra, MacBook Air 13\" M4, Sony WH-1000XM6",
            Software: "Microsoft Office 365 kostenlos inklusive",
            Vorteil: "348 € sparen + kostenloses Office 365",
            Einsatz: "Premium Alltag"
        },
        featured: false
    },
    {
        id: "ai-productivity-pack",
        name: "AI Productivity Pack",
        brand: "CampusTech",
        category: "Bundle",
        price: 24.99,
        priceSuffix: "/Monat",
        displayPrice: "24,99 €/Monat",
        saving: "KI-Tools im Monatsbundle",
        image: "images/abstract/ai_producivity_pack.svg",
        gallery: ["images/products/Chat-GPT.webp", "images/products/Claude.webp", "images/products/Microsoft-Copilot.png"],
        description: "KI-Unterstützung für Studium, Schreiben, Recherche und Produktivität.",
        highlights: ["ChatGPT Plus", "Claude Pro", "Microsoft Copilot Pro"],
        specs: {
            Enthalten: "ChatGPT Plus, Claude Pro und Microsoft Copilot Pro",
            Abrechnung: "monatlich kündbar",
            Vorteil: "KI-Unterstützung für Studium, Schreiben, Recherche und Produktivität",
            Einsatz: "AI Productivity"
        },
        featured: false
    }
];

const catalog = [...products, ...bundles];
const STUDENT_DISCOUNT_RATE = 0.1;

let cart = (JSON.parse(localStorage.getItem("techshop-warenkorb")) || [])
    .filter((entry) => catalog.some((product) => product.id === entry.id));
let activeCategory = "all";
let activeCompareCategory = "Laptops";

function isStudentDiscountActive() {
    return localStorage.getItem("campustech-student-discount") === "active";
}

function formatMoney(value, suffix = "") {
    const rounded = Math.round(value * 100) / 100;
    const hasCents = !Number.isInteger(rounded);
    return `${rounded.toLocaleString("de-DE", {
        minimumFractionDigits: hasCents ? 2 : 0,
        maximumFractionDigits: hasCents ? 2 : 0
    })} €${suffix}`;
}

function formatBasePrice(product) {
    return `${product.pricePrefix || ""}${formatMoney(product.price, product.priceSuffix || "")}`;
}

function getCurrentPrice(product) {
    const value = isStudentDiscountActive() ? product.price * (1 - STUDENT_DISCOUNT_RATE) : product.price;
    return Math.round(value * 100) / 100;
}

function formatCurrentPrice(product) {
    return `${product.pricePrefix || ""}${formatMoney(getCurrentPrice(product), product.priceSuffix || "")}`;
}

function priceMarkup(product, className = "price") {
    if (!isStudentDiscountActive()) {
        return `<p class="${className}">${formatBasePrice(product)}</p>`;
    }

    return `
        <p class="${className} price-discounted">
            <span class="original-price">${formatBasePrice(product)}</span>
            <span class="discount-price">${formatCurrentPrice(product)}</span>
        </p>
    `;
}

function priceInline(product) {
    if (!isStudentDiscountActive()) {
        return `<strong>${formatBasePrice(product)}</strong>`;
    }

    return `
        <strong class="inline-discount">
            <span class="original-price">${formatBasePrice(product)}</span>
            <span class="discount-price">${formatCurrentPrice(product)}</span>
        </strong>
    `;
}

function getProduct(id) {
    return catalog.find((product) => product.id === id) || products[0];
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + getCurrentPrice(getProduct(item.id)) * item.quantity, 0);
}

function setActiveNav() {
    const page = document.body.dataset.page;
    document.querySelectorAll("[data-nav]").forEach((link) => {
        link.classList.toggle("active", link.dataset.nav === page);
    });
}

function productCard(product) {
    return `
        <article class="product-card">
            <img src="${product.image}" alt="${product.brand} ${product.name}" width="620" height="520" loading="lazy">
            <div class="product-body">
                <div class="meta-row">
                    <span>${product.brand}</span>
                    <span>${product.category}</span>
                </div>
                <h3>${product.name}</h3>
                ${priceMarkup(product)}
                <ul class="highlight-list">
                    ${product.highlights.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <div class="product-actions">
                    <a class="btn btn-light" href="produktdetail.html?id=${product.id}">Details</a>
                    <button class="btn btn-dark" type="button" data-add="${product.id}">In den Warenkorb</button>
                </div>
            </div>
        </article>
    `;
}

function renderShop() {
    const grid = document.querySelector("[data-product-grid]");
    if (!grid) return;

    const search = document.querySelector("#searchInput").value.trim().toLowerCase();
    const sort = document.querySelector("#sortSelect").value;

    let visible = products.filter((product) => {
        const text = `${product.name} ${product.brand} ${product.category} ${product.highlights.join(" ")} ${Object.values(product.specs).join(" ")}`.toLowerCase();
        return (activeCategory === "all" || product.category === activeCategory) && text.includes(search);
    });

    visible = visible.sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        if (sort === "name") return a.name.localeCompare(b.name, "de");
        return Number(b.featured) - Number(a.featured);
    });

    grid.innerHTML = visible.length ? visible.map(productCard).join("") : `<p class="empty-state">Keine passenden Produkte.</p>`;
    document.querySelector("[data-result-count]").textContent = `${visible.length} Produkte`;
}

function offerCard(bundle) {
    return `
        <article class="bundle-card">
            <div class="offer-badge">${bundle.saving}</div>
            <div class="bundle-images">
                ${bundle.gallery.map((image, index) => `
                    <img src="${image}" alt="${bundle.name} Bestandteil ${index + 1}" width="260" height="220" loading="lazy">
                `).join("")}
            </div>
            <div class="bundle-body">
                <div class="bundle-title">
                    <img class="bundle-icon" src="${bundle.image}" alt="" width="48" height="48" loading="lazy">
                    <div>
                        <p class="eyebrow">Bundle-Vorteil</p>
                        <h3>${bundle.name}</h3>
                    </div>
                </div>
                ${bundle.badge ? `<p class="bundle-special-badge">${bundle.badge}</p>` : ""}
                ${bundle.description ? `<p class="bundle-description">${bundle.description}</p>` : ""}
                <ul class="highlight-list">
                    ${bundle.highlights.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <div class="bundle-prices">
                    <span>Einzelpreis <strong>${bundle.oldPrice}</strong></span>
                    <span>Bundlepreis ${priceInline(bundle)}</span>
                </div>
                <div class="product-actions">
                    <a class="btn btn-dark" href="produktdetail.html?id=${bundle.id}">Zum Bundle</a>
                    <button class="btn btn-light" type="button" data-add="${bundle.id}">In den Warenkorb</button>
                </div>
            </div>
        </article>
    `;
}

function renderOffers() {
    document.querySelectorAll("[data-offer-grid], [data-home-bundles]").forEach((grid) => {
        grid.innerHTML = bundles.map(offerCard).join("");
    });
}

function renderStudentDiscountPromo() {
    document.querySelectorAll("[data-student-discount-promo]").forEach((target) => {
        if (isStudentDiscountActive()) {
            target.innerHTML = `
                <div class="student-discount-card is-active">
                    <div>
                        <p class="eyebrow">Studentenrabatt aktiv</p>
                        <h2>10 % Rabatt sind aktiviert.</h2>
                        <p>Alle Produkt- und Bundlepreise wurden automatisch neu berechnet.</p>
                    </div>
                    <span class="student-discount-mark">🎓</span>
                </div>
            `;
            return;
        }

        if (sessionStorage.getItem("campustech-student-discount-dismissed") === "true") {
            target.innerHTML = "";
            return;
        }

        target.innerHTML = `
            <div class="student-discount-card">
                <div>
                    <p class="eyebrow">Studentenrabatt sichern</p>
                    <h2>Bist du Student oder Studentin?</h2>
                    <p>Aktiviere jetzt deinen exklusiven Studentenrabatt und spare 10 % auf alle Produkte und Bundles.</p>
                </div>
                <div class="student-discount-actions">
                    <button class="btn btn-dark" type="button" data-student-discount-accept>Ja, Studentenrabatt sichern</button>
                    <button class="btn btn-light" type="button" data-student-discount-decline>Nein, danke</button>
                </div>
            </div>
        `;
    });
}

function renderStudentMembership() {
    document.querySelectorAll("[data-student-membership]").forEach((target) => {
        target.innerHTML = `
            <article class="membership-card">
                <div>
                    <p class="eyebrow">CampusTech Student+</p>
                    <h2>CampusTech Student+</h2>
                    <p class="membership-price">4,99 €/Monat</p>
                    <ul>
                        <li>Kostenloser Zugang zu KI-Tools</li>
                        <li>Microsoft Office inklusive</li>
                        <li>Kostenloser Versand</li>
                        <li>Exklusive Bundle-Angebote</li>
                        <li>Rabatt auf Software Bundles</li>
                        <li>Priority Support</li>
                    </ul>
                </div>
                <button class="btn btn-dark" type="button" data-checkout-membership>Jetzt Mitglied werden</button>
            </article>
        `;
    });
}

function renderStudentDiscountBadge() {
    document.querySelectorAll(".student-nav-badge").forEach((badge) => badge.remove());
    if (!isStudentDiscountActive()) return;

    document.querySelectorAll(".site-header").forEach((header) => {
        const cartButton = header.querySelector("[data-cart-open]");
        if (!cartButton) return;
        const badge = document.createElement("span");
        badge.className = "student-nav-badge";
        badge.textContent = "🎓 Studentenrabatt aktiv";
        header.insertBefore(badge, cartButton);
    });
}

function renderStudentDiscountDeactivation() {
    document.querySelectorAll(".student-discount-deactivate").forEach((node) => node.remove());
    if (!isStudentDiscountActive()) return;

    const target = document.querySelector(".cart-drawer") || document.body.lastElementChild;
    const section = document.createElement("section");
    section.className = "student-discount-deactivate";
    section.innerHTML = `
        <div>
            <p class="eyebrow">Studentenrabatt aktiv</p>
            <p>Du kannst den 10 %-Rabatt jederzeit deaktivieren.</p>
        </div>
        <button class="btn btn-light" type="button" data-student-discount-deactivate>Studentenrabatt deaktivieren</button>
    `;
    document.body.insertBefore(section, target);
}

function refreshPrices() {
    renderShop();
    renderDetail();
    renderCompare();
    renderOffers();
    renderCart();
    renderStudentDiscountPromo();
    renderStudentDiscountBadge();
    renderStudentDiscountDeactivation();
}

function ensurePaymentModal() {
    let modal = document.querySelector("[data-payment-modal]");
    if (modal) return modal;

    modal = document.createElement("aside");
    modal.className = "payment-modal";
    modal.dataset.paymentModal = "";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
        <div class="payment-dialog" role="dialog" aria-modal="true" aria-labelledby="paymentTitle">
            <div class="payment-head">
                <div>
                    <p class="eyebrow">Checkout Simulation</p>
                    <h2 id="paymentTitle">Zahlung auswählen</h2>
                </div>
                <button class="icon-btn payment-close" type="button" data-payment-close aria-label="Schließen">
                    <img src="images/abstract/close.svg" alt="" width="22" height="22">
                </button>
            </div>
            <div class="payment-summary">
                <span data-payment-label>Warenkorb</span>
                <strong data-payment-amount>0 €</strong>
            </div>
            <fieldset class="payment-methods">
                <legend>Zahlungsart</legend>
                <label><input type="radio" name="payment-method" value="Karte" checked> Karte</label>
                <label><input type="radio" name="payment-method" value="Apple Pay"> Apple Pay</label>
                <label><input type="radio" name="payment-method" value="PayPal"> PayPal</label>
            </fieldset>
            <button class="btn btn-dark payment-confirm" type="button" data-payment-confirm>Zahlung simulieren</button>
            <p class="payment-status" data-payment-status></p>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function openPaymentModal({ amount, label }) {
    const modal = ensurePaymentModal();
    modal.querySelector("[data-payment-label]").textContent = label;
    modal.querySelector("[data-payment-amount]").textContent = formatMoney(amount);
    modal.querySelector("[data-payment-status]").textContent = "";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("payment-open");
}

function closePaymentModal() {
    const modal = document.querySelector("[data-payment-modal]");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("payment-open");
}

function renderDetail() {
    const target = document.querySelector("[data-product-detail]");
    if (!target) return;

    const params = new URLSearchParams(window.location.search);
    const product = getProduct(params.get("id") || "macbook-air");

    target.innerHTML = `
        <div class="detail-gallery" data-gallery-current="0">
            <div class="detail-media">
                <button class="gallery-nav gallery-prev" type="button" data-gallery-step="-1" aria-label="Vorheriges Bild">
                    <img src="images/abstract/arrow_left.svg" alt="" width="46" height="46">
                </button>
                <img class="detail-main-image" data-main-image src="${product.gallery[0]}" alt="${product.brand} ${product.name}" width="900" height="700">
                <button class="gallery-nav gallery-next" type="button" data-gallery-step="1" aria-label="Nächstes Bild">
                    <img src="images/abstract/arrow_right.svg" alt="" width="46" height="46">
                </button>
            </div>
            <div class="gallery-thumbs">
                ${product.gallery.map((image, index) => `
                    <button type="button" class="${index === 0 ? "active" : ""}" data-gallery-index="${index}" aria-current="${index === 0 ? "true" : "false"}">
                        <img src="${image}" alt="${product.name} Ansicht ${index + 1}" width="240" height="170">
                    </button>
                `).join("")}
            </div>
        </div>
        <div class="detail-info">
            <p class="eyebrow">${product.brand}</p>
            <h1>${product.name}</h1>
            ${product.badge ? `<p class="bundle-special-badge">${product.badge}</p>` : ""}
            ${product.description ? `<p class="product-copy">${product.description}</p>` : ""}
            ${product.oldPrice ? `<p class="old-price">Einzelpreis: ${product.oldPrice}</p>` : ""}
            ${priceMarkup(product)}
            ${product.saving ? `<p class="saving">${product.saving}</p>` : ""}
            <ul class="highlight-list detail-highlights">
                ${product.highlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <dl class="spec-list">
                ${Object.entries(product.specs).map(([key, value]) => `
                    <div>
                        <dt>${key}</dt>
                        <dd>${value}</dd>
                    </div>
                `).join("")}
            </dl>
            <div class="button-row">
                <button class="btn btn-dark" type="button" data-add="${product.id}">In den Warenkorb</button>
                <a class="btn btn-light" href="vergleich.html">Vergleichen</a>
                <a class="btn btn-light" href="produkte.html">Zurück zum Shop</a>
            </div>
        </div>
    `;
}

function setGalleryImage(index) {
    const gallery = document.querySelector(".detail-gallery");
    const mainImage = document.querySelector("[data-main-image]");
    if (!gallery || !mainImage) return;

    const thumbs = [...document.querySelectorAll("[data-gallery-index]")];
    if (!thumbs.length) return;

    const nextIndex = (index + thumbs.length) % thumbs.length;
    const activeThumb = thumbs[nextIndex];
    const image = activeThumb.querySelector("img");
    gallery.dataset.galleryCurrent = String(nextIndex);
    mainImage.src = image.src;
    thumbs.forEach((button) => {
        const isActive = button === activeThumb;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-current", isActive ? "true" : "false");
    });
    activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

function stepGallery(step) {
    const gallery = document.querySelector(".detail-gallery");
    if (!gallery) return;
    setGalleryImage(Number(gallery.dataset.galleryCurrent || 0) + step);
}

function renderCompare() {
    const table = document.querySelector("[data-compare-table]");
    if (!table) return;

    const categoryProducts = products.filter((product) => product.category === activeCompareCategory);
    table.innerHTML = categoryProducts.map((product) => `
        <tr>
            <td>
                <a class="compare-product" href="produktdetail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.brand} ${product.name}" width="72" height="72">
                    <strong>${product.brand} ${product.name}</strong>
                </a>
            </td>
            <td class="compare-price">${priceInline(product)}</td>
            <td>${product.specs.Prozessor || "-"}</td>
            <td>${product.specs.Display || "-"}</td>
            <td>${product.specs.Speicher || "-"}</td>
            <td>${product.specs.Akku || "-"}</td>
            <td>${product.specs.Kamera || "-"}</td>
            <td>${product.specs.Einsatz || "-"}</td>
        </tr>
    `).join("");
}

function saveCart() {
    localStorage.setItem("techshop-warenkorb", JSON.stringify(cart));
}

function addToCart(id) {
    const item = cart.find((entry) => entry.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, quantity: 1 });
    }
    saveCart();
    renderCart();
    showToast(`${getProduct(id).name} wurde hinzugefügt.`);
}

function removeFromCart(id) {
    cart = cart.filter((entry) => entry.id !== id);
    saveCart();
    renderCart();
}

function renderCart() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = getCartTotal();

    document.querySelectorAll("[data-cart-count]").forEach((node) => {
        node.textContent = count;
    });
    document.querySelectorAll("[data-cart-total]").forEach((node) => {
        node.textContent = formatMoney(total);
    });
    document.querySelectorAll("[data-cart-items]").forEach((node) => {
        node.innerHTML = cart.length ? cart.map((item) => {
            const product = getProduct(item.id);
            return `
                <article class="bag-item">
                    <img src="${product.image}" alt="${product.brand} ${product.name}" width="76" height="76">
                    <div>
                        <strong>${product.name}</strong>
                        <p class="${isStudentDiscountActive() ? "bag-price-discounted" : ""}">
                            ${isStudentDiscountActive() ? `<span class="original-price">${formatBasePrice(product)}</span>` : ""}
                            <span>${item.quantity} × ${formatCurrentPrice(product)}</span>
                        </p>
                    </div>
                    <button type="button" data-remove="${product.id}" aria-label="${product.name} entfernen">
                        <img src="images/abstract/close.svg" alt="" width="24" height="24">
                    </button>
                </article>
            `;
        }).join("") : `<p class="empty-state">Der Warenkorb ist leer.</p>`;
    });
}

function openCart() {
    const drawer = document.querySelector("[data-cart-drawer]");
    if (!drawer) return;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
}

function closeCart() {
    const drawer = document.querySelector("[data-cart-drawer]");
    if (!drawer) return;
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");
}

function openFilters() {
    document.querySelector("[data-filter-panel]")?.classList.add("open");
}

function closeFilters() {
    document.querySelector("[data-filter-panel]")?.classList.remove("open");
}

function showToast(message) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add]");
    const removeButton = event.target.closest("[data-remove]");
    const galleryButton = event.target.closest("[data-gallery-index]");
    const galleryStep = event.target.closest("[data-gallery-step]");
    const categoryButton = event.target.closest("[data-category]");
    const compareCategoryButton = event.target.closest("[data-compare-category]");
    const studentDiscountAccept = event.target.closest("[data-student-discount-accept]");
    const studentDiscountDecline = event.target.closest("[data-student-discount-decline]");
    const studentDiscountDeactivate = event.target.closest("[data-student-discount-deactivate]");
    const cartCheckout = event.target.closest("[data-checkout-cart]");
    const membershipCheckout = event.target.closest("[data-checkout-membership]");
    const paymentClose = event.target.closest("[data-payment-close]");
    const paymentConfirm = event.target.closest("[data-payment-confirm]");

    if (addButton) addToCart(addButton.dataset.add);
    if (removeButton) removeFromCart(removeButton.dataset.remove);

    if (studentDiscountAccept) {
        localStorage.setItem("campustech-student-discount", "active");
        sessionStorage.removeItem("campustech-student-discount-dismissed");
        refreshPrices();
        showToast("Studentenrabatt aktiviert.");
    }

    if (studentDiscountDecline) {
        sessionStorage.setItem("campustech-student-discount-dismissed", "true");
        renderStudentDiscountPromo();
    }

    if (studentDiscountDeactivate) {
        localStorage.removeItem("campustech-student-discount");
        refreshPrices();
        showToast("Studentenrabatt deaktiviert.");
    }

    if (cartCheckout) {
        if (!cart.length) {
            showToast("Der Warenkorb ist leer.");
            return;
        }
        openPaymentModal({ amount: getCartTotal(), label: "Warenkorb" });
        closeCart();
    }

    if (membershipCheckout) {
        openPaymentModal({ amount: 4.99, label: "CampusTech Student+ / Monat" });
    }

    if (paymentClose) {
        closePaymentModal();
    }

    if (paymentConfirm) {
        const modal = ensurePaymentModal();
        const method = modal.querySelector("input[name='payment-method']:checked").value;
        modal.querySelector("[data-payment-status]").textContent = `Zahlung mit ${method} simuliert.`;
    }

    if (categoryButton) {
        activeCategory = categoryButton.dataset.category;
        document.querySelectorAll("[data-category]").forEach((button) => {
            button.classList.toggle("active", button === categoryButton);
        });
        renderShop();
        closeFilters();
    }

    if (compareCategoryButton) {
        activeCompareCategory = compareCategoryButton.dataset.compareCategory;
        document.querySelectorAll("[data-compare-category]").forEach((button) => {
            button.classList.toggle("active", button === compareCategoryButton);
        });
        renderCompare();
    }

    if (galleryButton) {
        setGalleryImage(Number(galleryButton.dataset.galleryIndex));
    }

    if (galleryStep) {
        stepGallery(Number(galleryStep.dataset.galleryStep));
    }

    if (event.target.closest("[data-cart-open]")) openCart();
    if (event.target.closest("[data-cart-close]")) closeCart();
    if (event.target.closest("[data-filter-open]")) openFilters();
    if (event.target.closest("[data-filter-close]")) closeFilters();
    if (event.target.closest("[data-search-submit]")) renderShop();
});

document.querySelectorAll("#searchInput, #sortSelect").forEach((input) => {
    input.addEventListener("input", renderShop);
    input.addEventListener("change", renderShop);
});

const navToggle = document.querySelector(".nav-toggle");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        const nav = document.querySelector(".site-nav");
        const isOpen = nav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeCart();
        closeFilters();
        closePaymentModal();
    }
    if (document.querySelector("[data-product-detail]")) {
        if (event.key === "ArrowLeft") stepGallery(-1);
        if (event.key === "ArrowRight") stepGallery(1);
    }
});

setActiveNav();
renderShop();
renderDetail();
renderCompare();
renderOffers();
renderCart();
renderStudentDiscountPromo();
renderStudentMembership();
renderStudentDiscountBadge();
renderStudentDiscountDeactivation();
