const products = [
    {
        id: "macbook-air",
        name: "MacBook Air 13\"",
        brand: "Apple",
        category: "Laptops",
        price: 1199,
        displayPrice: "ab 1.199 €",
        image: "https://www.apple.com/v/macbook-air/z/images/overview/hero/hero_static__c9sislzzicq6_large.png",
        gallery: [
            "https://www.apple.com/v/macbook-air/z/images/overview/hero/hero_static__c9sislzzicq6_large.png",
            "https://www.apple.com/v/macbook-air/z/images/overview/design/design_hero_static__e56c1v71mr6u_large.png",
            "https://www.apple.com/v/macbook-air/z/images/overview/performance/performance_hero_static__fmu2opq0522q_large.jpg"
        ],
        highlights: ["Apple M4", "13,6\" Liquid Retina", "bis zu 18 Std. Akku"],
        specs: {
            Display: "13,6\" Liquid Retina",
            Prozessor: "Apple M4",
            Speicher: "ab 256 GB SSD",
            Einsatz: "leichtes Arbeiten"
        },
        featured: true
    },
    {
        id: "thinkpad-x1-carbon",
        name: "ThinkPad X1 Carbon Gen 13",
        brand: "Lenovo",
        category: "Laptops",
        price: 2059,
        displayPrice: "ab 2.059 €",
        image: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzExOTYzfGltYWdlL3BuZ3xoYjYvaDk0LzE3Mjg4MjY2NDc3MDg2LnBuZ3w0OWUxMmI2MzAyYjQ3NTZkZWZiMmRjMTExOTk2ODU1Y2RjYmQwYWYzZGFkNGEwODQzY2UxMmQwNGRlOTllNmU2/lenovo-thinkpad-x1-carbon-gen-13-14-inch-intel-feature-1.png",
        gallery: [
            "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzExOTYzfGltYWdlL3BuZ3xoYjYvaDk0LzE3Mjg4MjY2NDc3MDg2LnBuZ3w0OWUxMmI2MzAyYjQ3NTZkZWZiMmRjMTExOTk2ODU1Y2RjYmQwYWYzZGFkNGEwODQzY2UxMmQwNGRlOTllNmU2/lenovo-thinkpad-x1-carbon-gen-13-14-inch-intel-feature-1.png",
            "https://p2-ofp.static.pub/ShareResource/na/products/thinkpad/400x300/lenovo-thinkpad-x1-carbon-gen-13-14-inch-intel-feature-2.png",
            "https://p2-ofp.static.pub/ShareResource/na/products/thinkpad/400x300/lenovo-thinkpad-x1-carbon-gen-13-14-inch-intel-feature-3.png"
        ],
        highlights: ["14\" OLED optional", "Intel Core Ultra", "unter 1 kg"],
        specs: {
            Display: "14\" OLED optional",
            Prozessor: "Intel Core Ultra",
            Gewicht: "unter 1 kg",
            Einsatz: "Business"
        },
        featured: true
    },
    {
        id: "dell-xps-13",
        name: "XPS 13",
        brand: "Dell",
        category: "Laptops",
        price: 1299,
        displayPrice: "ab 1.299 €",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/xps/fy25-family-launch/xps-13-9345-laptop-sl-gallery-1.psd?fmt=png-alpha&wid=1200&hei=900",
        gallery: [
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/xps/fy25-family-launch/xps-13-9345-laptop-sl-gallery-1.psd?fmt=png-alpha&wid=1200&hei=900",
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/xps/fy25-family-launch/xps-13-9345-laptop-sl-gallery-2.psd?fmt=png-alpha&wid=1200&hei=900",
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/xps/fy25-family-launch/xps-13-9345-laptop-sl-gallery-3.psd?fmt=png-alpha&wid=1200&hei=900"
        ],
        highlights: ["13,4\" Display", "kompaktes Gehäuse", "Premium-Aluminium"],
        specs: {
            Display: "13,4\"",
            Prozessor: "Intel Core Ultra / Snapdragon X",
            Material: "Aluminium",
            Einsatz: "mobiles Arbeiten"
        },
        featured: false
    },
    {
        id: "galaxy-s25-ultra",
        name: "Galaxy S25 Ultra",
        brand: "Samsung",
        category: "Smartphones",
        price: 1449,
        displayPrice: "ab 1.449 €",
        image: "https://images.samsung.com/is/image/samsung/p6pim/de/sm-s938bzkgeub/gallery/de-galaxy-s25-ultra-s938-sm-s938bzkgeub-thumb-544703289",
        gallery: [
            "https://images.samsung.com/is/image/samsung/p6pim/de/sm-s938bzkgeub/gallery/de-galaxy-s25-ultra-s938-sm-s938bzkgeub-thumb-544703289",
            "https://images.samsung.com/is/image/samsung/assets/de/smartphones/galaxy-s25-ultra/buy/S25U_Product_KV_PC.jpg",
            "https://images.samsung.com/is/image/samsung/p6pim/de/sm-s938bzkgeub/gallery/de-galaxy-s25-ultra-s938-sm-s938bzkgeub-544703288"
        ],
        highlights: ["Galaxy AI", "200 MP Kamera", "S Pen"],
        specs: {
            Display: "6,9\" Dynamic AMOLED 2X",
            Prozessor: "Snapdragon 8 Elite for Galaxy",
            Kamera: "200 MP Weitwinkel",
            Einsatz: "Foto und Produktivität"
        },
        featured: true
    },
    {
        id: "xiaomi-15-ultra",
        name: "Xiaomi 15 Ultra",
        brand: "Xiaomi",
        category: "Smartphones",
        price: 1499,
        displayPrice: "ab 1.499,90 €",
        image: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-15-ultra/pc/section01-phone.png",
        gallery: [
            "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-15-ultra/pc/section01-phone.png",
            "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-15-ultra/pc/section03-phone.png",
            "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-15-ultra/pc/section08-phone.png"
        ],
        highlights: ["Leica Kamera", "Snapdragon 8 Elite", "90 W HyperCharge"],
        specs: {
            Display: "6,73\" AMOLED",
            Prozessor: "Snapdragon 8 Elite",
            Kamera: "Leica Quad-Kamera",
            Einsatz: "mobile Fotografie"
        },
        featured: true
    },
    {
        id: "ipad-pro",
        name: "iPad Pro 11\"",
        brand: "Apple",
        category: "Tablets",
        price: 1199,
        displayPrice: "ab 1.199 €",
        image: "https://www.apple.com/newsroom/images/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/article/Apple-iPad-Pro-color-lineups-251015_inline.jpg.large.jpg",
        gallery: [
            "https://www.apple.com/newsroom/images/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/article/Apple-iPad-Pro-color-lineups-251015_inline.jpg.large.jpg",
            "https://www.apple.com/newsroom/images/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/article/Apple-iPad-Pro-Magic-Keyboard-01-251015_big.jpg.large.jpg",
            "https://www.apple.com/newsroom/images/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/article/Apple-iPad-Pro-thin-design-251015_inline.jpg.large.jpg"
        ],
        highlights: ["Apple M5", "Ultra Retina XDR", "sehr dünn"],
        specs: {
            Display: "11\" Ultra Retina XDR",
            Prozessor: "Apple M5",
            Zubehör: "Apple Pencil Pro",
            Einsatz: "Kreativarbeit"
        },
        featured: false
    },
    {
        id: "galaxy-tab-s10-ultra",
        name: "Galaxy Tab S10 Ultra",
        brand: "Samsung",
        category: "Tablets",
        price: 1339,
        displayPrice: "ab 1.339 €",
        image: "https://images.samsung.com/is/image/samsung/p6pim/de/sm-x926bzaeeub/gallery/de-galaxy-tab-s10-ultra-5g-x926-sm-x926bzaeeub-thumb-543691583",
        gallery: [
            "https://images.samsung.com/is/image/samsung/p6pim/de/sm-x926bzaeeub/gallery/de-galaxy-tab-s10-ultra-5g-x926-sm-x926bzaeeub-thumb-543691583",
            "https://images.samsung.com/is/image/samsung/p6pim/de/sm-x926bzaeeub/gallery/de-galaxy-tab-s10-ultra-5g-x926-sm-x926bzaeeub-543691582",
            "https://images.samsung.com/is/image/samsung/p6pim/de/sm-x926bzaeeub/gallery/de-galaxy-tab-s10-ultra-5g-x926-sm-x926bzaeeub-543691586"
        ],
        highlights: ["14,6\" AMOLED", "S Pen", "Galaxy AI"],
        specs: {
            Display: "14,6\" Dynamic AMOLED 2X",
            Stift: "S Pen enthalten",
            Schutz: "IP68",
            Einsatz: "große Arbeitsfläche"
        },
        featured: false
    },
    {
        id: "sony-wh-1000xm5",
        name: "WH-1000XM5",
        brand: "Sony",
        category: "Kopfhörer",
        price: 299,
        displayPrice: "299 €",
        image: "https://www.sony.de/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=1200",
        gallery: [
            "https://www.sony.de/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=1200",
            "https://www.sony.de/image/3d0710e1438cfa30eadf9b6b9ba44f2b?fmt=png-alpha&wid=1200",
            "https://www.sony.de/image/07b9c574c6d6a63f19f91a9ec6e790bd?fmt=png-alpha&wid=1200"
        ],
        highlights: ["Noise Cancelling", "Bluetooth", "bis zu 30 Std."],
        specs: {
            Typ: "Over-Ear",
            Akku: "bis zu 30 Std.",
            Verbindung: "Bluetooth",
            Einsatz: "Reisen und Fokus"
        },
        featured: true
    },
    {
        id: "apple-watch-series-10",
        name: "Apple Watch Series 10",
        brand: "Apple",
        category: "Smartwatches",
        price: 449,
        displayPrice: "ab 449 €",
        image: "https://www.apple.com/v/apple-watch-series-10/c/images/overview/hero/hero_startframe__dzaznwurvilm_large.jpg",
        gallery: [
            "https://www.apple.com/v/apple-watch-series-10/c/images/overview/hero/hero_startframe__dzaznwurvilm_large.jpg",
            "https://www.apple.com/v/apple-watch-series-10/c/images/overview/design/design_titanium__ghs9byw6j2i2_large.jpg",
            "https://www.apple.com/v/apple-watch-series-10/c/images/overview/health/health__db0y5flc7o2u_large.jpg"
        ],
        highlights: ["Always-On Retina", "flaches Gehäuse", "Gesundheitsfunktionen"],
        specs: {
            Display: "Always-On Retina",
            Größen: "42 mm oder 46 mm",
            Material: "Aluminium oder Titan",
            Einsatz: "Alltag und Gesundheit"
        },
        featured: false
    },
    {
        id: "samsung-t7-shield",
        name: "Portable SSD T7 Shield",
        brand: "Samsung",
        category: "Zubehör",
        price: 109,
        displayPrice: "ab 109 €",
        image: "https://images.samsung.com/is/image/samsung/p6pim/de/mu-pe1t0s-eu/gallery/de-portable-ssd-t7-shield-mu-pe1t0s-eu-531004884",
        gallery: [
            "https://images.samsung.com/is/image/samsung/p6pim/de/mu-pe1t0s-eu/gallery/de-portable-ssd-t7-shield-mu-pe1t0s-eu-531004884",
            "https://images.samsung.com/is/image/samsung/p6pim/de/mu-pe1t0s-eu/gallery/de-portable-ssd-t7-shield-mu-pe1t0s-eu-531004885",
            "https://images.samsung.com/is/image/samsung/p6pim/de/mu-pe1t0s-eu/gallery/de-portable-ssd-t7-shield-mu-pe1t0s-eu-531004887"
        ],
        highlights: ["USB 3.2 Gen 2", "robustes Gehäuse", "bis 1.050 MB/s"],
        specs: {
            Typ: "Portable SSD",
            Anschluss: "USB-C",
            Tempo: "bis 1.050 MB/s",
            Einsatz: "Backup und Medien"
        },
        featured: false
    }
];

let cart = JSON.parse(localStorage.getItem("techshop-warenkorb")) || [];
let activeCategory = "all";

const euro = (value) => `${value.toLocaleString("de-DE")} €`;

function getProduct(id) {
    return products.find((product) => product.id === id) || products[0];
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
                    <span>${product.displayPrice}</span>
                </div>
                <h3>${product.name}</h3>
                <ul class="highlight-list">
                    ${product.highlights.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <div class="product-actions">
                    <a class="btn btn-light" href="produktdetail.html?id=${product.id}">Mehr erfahren</a>
                    <button class="btn btn-dark" type="button" data-add="${product.id}">In den Warenkorb</button>
                    <button class="text-link" type="button" data-modal="${product.id}">Kurzansicht</button>
                </div>
            </div>
        </article>
    `;
}

function renderFeatured() {
    const target = document.querySelector("[data-featured-products]");
    if (!target) return;

    target.innerHTML = products
        .filter((product) => product.featured)
        .slice(0, 3)
        .map(productCard)
        .join("");
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
            <p class="price">${product.displayPrice}</p>
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
    document.body.classList.add("drawer-open");
}

function closeFilters() {
    document.querySelector("[data-filter-panel]")?.classList.remove("open");
    document.body.classList.remove("drawer-open");
}

function openModal(id) {
    const dialog = document.querySelector("[data-product-dialog]");
    const content = document.querySelector("[data-dialog-content]");
    if (!dialog || !content) return;

    const product = getProduct(id);
    content.innerHTML = `
        <div class="dialog-content">
            <img src="${product.image}" alt="${product.brand} ${product.name}" width="520" height="430">
            <div>
                <p class="eyebrow">${product.brand}</p>
                <h2>${product.name}</h2>
                <p class="price">${product.displayPrice}</p>
                <ul class="highlight-list">
                    ${product.highlights.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <div class="button-row">
                    <a class="btn btn-light" href="produktdetail.html?id=${product.id}">Mehr erfahren</a>
                    <button class="btn btn-dark" type="button" data-add="${product.id}">In den Warenkorb</button>
                </div>
            </div>
        </div>
    `;
    dialog.showModal();
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
    const modalButton = event.target.closest("[data-modal]");
    const removeButton = event.target.closest("[data-remove]");
    const galleryButton = event.target.closest("[data-gallery]");
    const categoryButton = event.target.closest("[data-category]");

    if (addButton) addToCart(addButton.dataset.add);
    if (modalButton) openModal(modalButton.dataset.modal);
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
    if (event.target.closest("[data-dialog-close]")) document.querySelector("[data-product-dialog]").close();
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
renderFeatured();
renderShop();
renderDetail();
renderCompare();
renderCart();
