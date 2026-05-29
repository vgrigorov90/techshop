// Produkte laden und anzeigen
fetch('data/products.json')
    .then(response => response.json())
    .then(produkte => {
        zeigeProdukte(produkte);
        setupFilter(produkte);
    });

function zeigeProdukte(produkte) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    produkte.forEach(produkt => {
        container.innerHTML += `
            <div class="product-card" data-kategorie="${produkt.kategorie}">
                <div class="product-emoji">${produkt.bild}</div>
                <h3>${produkt.name}</h3>
                <p>${produkt.beschreibung}</p>
                <span class="price">${produkt.preis} €</span>
                <button class="btn" onclick="addToCart(${produkt.id})">
                    In den Warenkorb
                </button>
            </div>
        `;
    });
}

function setupFilter(produkte) {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            if (filter === 'all') {
                zeigeProdukte(produkte);
            } else {
                const gefiltert = produkte.filter(p => p.kategorie === filter);
                zeigeProdukte(gefiltert);
            }
        });
    });
}

function addToCart(id) {
    console.log('Produkt hinzugefügt:', id);
}