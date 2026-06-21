const products = [
    {
        id: "macbook-air",
        name: "MacBook Air 13\"",
        brand: "Apple",
        category: "Laptops",
        price: 1199,
        displayPrice: "ab 1.199 €",
        image: "images/products/macbook_air_13_1.webp",
        gallery: ["images/products/macbook_air_13_1.webp", "images/products/macbook_air_13_2.webp", "images/products/macbook_air_3.webp"],
        highlights: ["Apple M4", "13,6\" Liquid Retina", "bis zu 18 Std. Akku"],
        specs: {
            Display: "13,6\" Liquid Retina",
            Prozessor: "Apple M4",
            Speicher: "ab 16 GB RAM / 256 GB SSD",
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
            Speicher: "bis 64 GB RAM moeglich",
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
            Einsatz: "Homeoffice und Alltag"
        },
        featured: false
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
            Kamera: "200 MP + 50 MP Ultraweitwinkel",
            Einsatz: "Foto und Produktivitaet"
        },
        featured: true
    },
    {
        id: "redmi-note-14",
        name: "Redmi Note 14",
        brand: "Xiaomi",
        category: "Smartphones",
        price: 199,
        displayPrice: "ab 199 €",
        image: "images/products/xiaomi-redmi-note-14_1.webp",
        gallery: ["images/products/xiaomi-redmi-note-14_1.webp", "images/products/xiaomi-redmi-note-14_2.webp", "images/products/xiaomi-redmi-note-14_3.webp"],
        highlights: ["6,67\" AMOLED", "120 Hz", "5.500 mAh Akku"],
        specs: {
            Display: "6,67\" AMOLED, 120 Hz",
            Prozessor: "MediaTek Helio G99-Ultra",
            Kamera: "108 MP Hauptkamera",
            Einsatz: "Budget-Smartphone fuer Alltag"
        },
        featured: true
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
        price: 99,
        displayPrice: "99 €",
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
            Volumen: "kompakt fuer Campus und Alltag",
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
        highlights: ["20.000 mAh", "USB-C", "fuer lange Arbeitstage"],
        specs: {
            Typ: "Powerbank",
            Kapazitaet: "20.000 mAh",
            Anschluss: "USB-C",
            Einsatz: "Mobiles Laden"
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
        price: 1049,
        displayPrice: "1.049 €",
        oldPrice: "1.187 €",
        saving: "138 € sparen",
        image: "images/products/lenovo-thinkpad-e16-gen-3_2.webp",
        gallery: ["images/products/lenovo-thinkpad-e16-gen-3_2.webp", "images/products/logitech-mx-master-3s_1.webp", "images/products/herschel-retreat-youth_1.webp"],
        highlights: ["Lenovo ThinkPad E16 Gen 3", "Logitech MX Master 3S", "Herschel Retreat Backpack"],
        specs: {
            Notebook: "ThinkPad E16 Gen 3 fuer Seminar, Hausarbeit und Office",
            Zubehoer: "MX Master 3S + Herschel Backpack",
            Vorteil: "Set-Vorteil mit 138 € Ersparnis",
            Einsatz: "Studium"
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
        saving: "348 € sparen",
        image: "images/products/samsung-galaxy-s25-ultra_2.webp",
        gallery: ["images/products/samsung-galaxy-s25-ultra_2.webp", "images/products/macbook_air_13_1.webp", "images/products/sony-wh-1000xm6_2.webp"],
        highlights: ["Galaxy S25 Ultra", "MacBook Air 13\" M4", "Sony WH-1000XM6"],
        specs: {
            Smartphone: "6,9\" AMOLED, 200 MP Kamera, S Pen",
            Notebook: "Apple M4, bis 18 Std. Akku",
            Audio: "QN3 ANC, Bluetooth 5.3",
            Vorteil: "Set-Vorteil mit 348 € Ersparnis",
            Einsatz: "Premium Alltag"
        },
        featured: false
    },
    {
        id: "homeoffice-bundle",
        name: "Homeoffice Bundle",
        brand: "CampusTech",
        category: "Bundle",
        price: 1349,
        displayPrice: "1.349 €",
        oldPrice: "1.536 €",
        saving: "187 € sparen",
        image: "images/products/dell-16-intel-5_1.webp",
        gallery: ["images/products/dell-16-intel-5_1.webp", "images/products/sony-wh-1000xm6_1.webp", "images/products/logitech-mx-master-3s_2.webp", "images/products/anker-735-prime-power-bank-20000_1.webp"],
        highlights: ["Dell 16", "Sony WH-1000XM6", "Logitech MX Master 3S", "Anker Prime Powerbank 20000"],
        specs: {
            Laptop: "Dell 16 fuer Office und Videocalls",
            Zubehoer: "ANC-Kopfhoerer, MX Master 3S und 20.000 mAh Powerbank",
            Vorteil: "Set-Vorteil mit 187 € Ersparnis",
            Einsatz: "Homeoffice"
        },
        featured: false
    }
];

const catalog = [...products, ...bundles];

let cart = (JSON.parse(localStorage.getItem("techshop-warenkorb")) || [])
    .filter((entry) => catalog.some((product) => product.id === entry.id));
let activeCategory = "all";

const euro = (value) => `${value.toLocaleString("de-DE")} €`;

function getProduct(id) {
    return catalog.find((product) => product.id === id) || products[0];
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
                <p class="price">${product.displayPrice}</p>
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
                    <img src="${image}" alt="${bundle.name} Produkt ${index + 1}" width="260" height="220" loading="lazy">
                `).join("")}
            </div>
            <div class="bundle-body">
                <p class="eyebrow">Bundle-Vorteil</p>
                <h3>${bundle.name}</h3>
                <ul class="highlight-list">
                    ${bundle.highlights.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <div class="bundle-prices">
                    <span>Regular price <strong>${bundle.oldPrice}</strong></span>
                    <span>Bundle price <strong>${bundle.displayPrice}</strong></span>
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

function renderDetail() {
    const target = document.querySelector("[data-product-detail]");
    if (!target) return;

    const params = new URLSearchParams(window.location.search);
    const product = getProduct(params.get("id") || "macbook-air");

    target.innerHTML = `
        <div class="detail-gallery">
            <img class="detail-main-image" data-main-image src="${product.gallery[0]}" alt="${product.brand} ${product.name}" width="900" height="700">
            <div class="gallery-thumbs">
                ${product.gallery.map((image, index) => `
                    <button type="button" class="${index === 0 ? "active" : ""}" data-gallery="${image}">
                        <img src="${image}" alt="${product.name} Ansicht ${index + 1}" width="240" height="170">
                    </button>
                `).join("")}
            </div>
        </div>
        <div class="detail-info">
            <p class="eyebrow">${product.brand}</p>
            <h1>${product.name}</h1>
            ${product.oldPrice ? `<p class="old-price">${product.oldPrice}</p>` : ""}
            <p class="price">${product.displayPrice}</p>
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
            </div>
        </div>
    `;
}

function renderCompare() {
    const table = document.querySelector("[data-compare-table]");
    if (!table) return;

    table.innerHTML = products.slice(0, 4).map((product) => `
        <tr>
            <td>
                <a class="compare-product" href="produktdetail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.brand} ${product.name}" width="72" height="72">
                    <strong>${product.brand} ${product.name}</strong>
                </a>
            </td>
            <td>${product.displayPrice}</td>
            <td>${product.specs.Display || product.specs.Typ || product.category}</td>
            <td>${product.specs.Prozessor || product.specs.Anschluss || product.specs.Verbindung || "-"}</td>
            <td>${product.specs.Einsatz}</td>
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
    const total = cart.reduce((sum, item) => sum + getProduct(item.id).price * item.quantity, 0);

    document.querySelectorAll("[data-cart-count]").forEach((node) => {
        node.textContent = count;
    });
    document.querySelectorAll("[data-cart-total]").forEach((node) => {
        node.textContent = euro(total);
    });
    document.querySelectorAll("[data-cart-items]").forEach((node) => {
        node.innerHTML = cart.length ? cart.map((item) => {
            const product = getProduct(item.id);
            return `
                <article class="bag-item">
                    <img src="${product.image}" alt="${product.brand} ${product.name}" width="76" height="76">
                    <div>
                        <strong>${product.name}</strong>
                        <p>${item.quantity} × ${product.displayPrice}</p>
                    </div>
                    <button type="button" data-remove="${product.id}" aria-label="${product.name} entfernen">×</button>
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
    const galleryButton = event.target.closest("[data-gallery]");
    const categoryButton = event.target.closest("[data-category]");

    if (addButton) addToCart(addButton.dataset.add);
    if (removeButton) removeFromCart(removeButton.dataset.remove);

    if (categoryButton) {
        activeCategory = categoryButton.dataset.category;
        document.querySelectorAll("[data-category]").forEach((button) => {
            button.classList.toggle("active", button === categoryButton);
        });
        renderShop();
        closeFilters();
    }

    if (galleryButton) {
        document.querySelector("[data-main-image]").src = galleryButton.dataset.gallery;
        document.querySelectorAll("[data-gallery]").forEach((button) => {
            button.classList.toggle("active", button === galleryButton);
        });
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
    }
});

setActiveNav();
renderShop();
renderDetail();
renderCompare();
renderOffers();
renderCart();
