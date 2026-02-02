// Données des produits
const products = {
    parfums: [
        {
            id: 1,
            name: "EPICE ET PUISSANCE ",
            price: 45.00,
            image: "parfum_homme.jpg"
        },
        {
            id: 2,
            name: "FRAIS ET DYNAMIQUE",
            price: 52.00,
            image: "Grandeur_Elite_Extreme_Orchid_EDP_Perfume_100ml_For_Unisex.jpg"
        },
        {
            id: 3,
            name: "PROPRE ET ENERGISSANT",
            price: 45.00,
            image: "No._105_insp._by_Intense_Cafe_by_Mo_tale_-_No._105_insp._by_Intense_Cafe_by_Mo_tale.jpg"
        },
        {
            id: 4,
            name: "CLASSIQUE ET VIRIL",
            price: 35.00,
            image: "Yves_Saint_Laurent_Black_Opium_Le_Parfum,_1_oz..jpg"
        },
        {
            id: 5,
            name: "CHIC ET SENSUEL",
            price: 45.00,
            image: "Multiverse_-_Luxury_Perfume_for_Him_with_30__Essence_-_50_ml.jpg"
        },
        {
            id: 6,
            name: "CHAUD ET ENVELOPPANT ",
            price: 52.00,
            image: "KAYALI_Oudgasm_Cafe_Oud___19_Eau_De_Parfum_Intense__50ml_.jpg"
        },
        {
            id: 7,
            name: "UN PARFUM UNE HISTOIRE",
            price: 60.00,
            image: "Maison_Alhambra_Galactic_Elixir_Men_Eau_de_Parfum_100ml (1).jpg"
        },
        {
            id: 8,
            name: "FORT ET AUDACIEUX",
            price: 50.00,
            image: "Madagascar_Vanilla_Eau_de_Parfum___Luxe_Fragrance_for_Warm,_Sensual_Elegance___Sephora.jpg"
        }
    ],
    soins: [
        {
            id: 9,
            name: "CHAUD INTENSE ET MYSTERIEUX... Un parfum puissant",
            price: 45.00,
            image: "Nr_85_insp._by_Chance_by_Chanel_-_70ml.jpg"
        },
        {
            id: 10,
            name: "CE PARFUM NE SE PORTE PAS, IL SE RESSENT",
            price: 45.00,
            image: "1769450746303.png"
        },
        {
            id: 11,
            name: "SUR CHAQUE PEAU UNE HISTOIRE",
            price: 45.00,
            image: "CHLOÉ_PARFUM_SIGNATURE.jpg"
        },
        {
            id: 12,
            name: "FRAIS, LUMINEUX ET FEMININ",
            price: 50.00,
            image: "1769714610828.png"
        },
        {
            id: 13,
            name: "SOLAIRE ET ENVOUTANT",
            price: 45.00,
            image: "1769714661801.png"
        },
        {
            id: 14,
            name: "LEGER ET LUMINEUX",
            price: 45.00,
            image: "1769714559631.png"
        },
        {
            id: 14,
            name: "UN PARFUM DOUX ET INTIME",
            price: 45.00,
            image: "1769450120390.png"
        }
    ],
    cheveux: [
        {
            id: 14,
            name: "SENSUEL ET MODERNE",
            price: 48.00,
            image: "Apa_de_parfum_Hayaati_Belle_de_Fragrance_World,_Femei,_50_ml (1).jpg"
        },
        {
            id: 15,
            name: "GLAMOUR ET LUMINEUX",
            price: 52.90,
            image: "BROKAR_1254_Pure_Malachite_–_Woody_Aromatic_Unisex_Perfume.jpg"
        },
        {
            id: 16,
            name: "GOURMAND ET ADDICTIF",
            price: 35.90,
            image: "GOLDEN_DECADE_EDP_80_ML__2.71_FL._OZ_. (1).jpg"
        },
        {
            id: 17,
            name: "IONIQUE ET ELEGANT",
            price: 60.00,
            image: "Interior_Spray_50ml___Peppered_Orchid.jpg"
        },
        {
            id: 18,
            name: "DOUX ET INTIME",
            price: 29.90,
            image: "Chloé_Chloé_Nomade_Jasmin_Naturel.jpg"
        },
        {
            id: 19,
            name: "ROMANTIQUE ET CHALEREUX",
            price: 60.00,
            image: "Set_regalo.jpg"
        },
        {
            id: 20,
            name: "NATUREL ET CHIC",
            price: 52.00,
            image: "pinterest_1769196721525(1) (1).jpg"
        },
        {
            id: 21,
            name: "RECCONFPRTANT ET MYSTERIEUX",
            price: 45.00,
            image: "pinterest_1769196721525.jpg"
        }
    ],
    corps: [
        {
            id: 22,
            name: "LAIT CORPS AU LAIT D'ANESSE",
            price: 49.90,
            image: "Montale_Intense_Cafe_EDP_50ml.jpg"
        },
        {
            id: 23,
            name: "GLOW BODY OIL – HUILE SCINTILLANTE",
            price: 44.90,
            image: "Mancera_Intensitive_Aoud_Gold_by_Mancera_Eau_De_Parfum_Spray__Unisex__4_oz_for_Women_-_Premium_Designer_Fragrance.jpg"
        },
        {
            id: 24,
            name: "GEL DOUCHE RÉGÉNÉRANT À LA BAVE D'ESCARGOT",
            price: 13.90,
            image: "Montale_Intense_Cafe_100_ml_-_Eau_de_Parfum_-_Unisex_Parfum___bol.com.jpg"
        },
        {
            id: 25,
            name: "GEL DOUCHE ICE EFFECT",
            price: 17.90,
            image: "MIDNIGHT_LEGION_FOR_MAN_EXTRAIT_DE_PARFUM_50_ML.jpg"
        },
        {
            id: 23,
            name: "GEL DOUCHE À L'HUILE D ARGAN",
            price: 12.90,
            image: "pinterest_1769196641125.jpg"
        },
        {
            id: 24,
            name: "NETTOYANT BÉBÉ EXTRA-DOUX AURODHEA",
            price: 21.90,
            image: "RKYND_Praysure_Eau_De_Parfum_50ml.jpg"
        },
        {
            id: 26,
            name: "MYVERA CRUSH KETO + – BOOST D'ÉNERGIE 12 BOUTEILLES",
            price: 104.90,
            image: "Odyssey_Homme_White_Edition_For_Men_s_Eau_De_Parfum_Spray_6.8_Oz_200_ML_Fragrances (1).jpg"
        },
        {
            id: 27,
            name: "COMPLÉMENT RENFORCEMENT OS, DENTS & IMMUNITÉ",
            price: 24.90,
            image: "ACQUA_DI_PROFUMO_888_80_ML.jpg"
        },
        {
            id: 28,
            name: "SORE STOP + – COMPLÉMENT ANTI-INFLAMMATOIRE",
            price: 39.00,
            image: "Affogato_Al_Caffe_100ML_Eau_de_parfum_Unisexe_-_100ML.jpg"
        },
        {
            id: 29,
            name: "MYVERA CRUSH WOMAN+ – ÉQUILIBRE HORMONAL 6 BOUTEILLES",
            price: 49.90,
            image: "[1996]_Cafe_Parfums_-_Café-Café_Paris_Eau_de_Parfum (1).jpg"
        },
        {
            id: 30,
            name: "MYVERA CRUSH MAN + BOOST DE TESTOSTÉRONE",
            price: 44.90,
            image: "10_Best_Perfumes_With_Patchouli_For_Her___Viora_London.jpg"
        }
    ],
    complements: [
        {
            id: 31,
            name: "HYDRATE ET NOURRIT LA PEAU EN PROFONDEUR",
            price: 35.90,
            image: "1000011920.jpg"
        },
        {
            id: 32,
            name: "UN CLASSIQUE POUR UNE PEAU LISSE",
            price: 34.90,
            image: "1000011914.jpg"
        },
        {
            id: 33,
            name: "UN PRODUIT DE SOIN QUI FAIT LES MIRACLES",
            price: 34.90,
            image: "1000011919.jpg"
        },
        {
            id: 34,
            name: "LISSE LES RIDES ET LES IMPERFECTIONS",
            price: 34.90,
            image: "1000011913.jpg"
        },
        {
            id: 35,
            name: "CRÈME DE JOUR IDEALE POUR LES PEAUX SECHES ET SENSIBLE",
            price: 34.90,
            image: "1000011918.jpg"
        },
        {
            id: 36,
            name: "UN PRODUIT DE LUXE POUR UNE PEAU PARFAITE",
            price: 34.90,
            image: "1000011912.jpg"
        }
        
    ],
    maquillage: [
        {
            id: 31,
            name: "LE FOND DE TEINT QUI FLOUTE, LISSE ET PROTÈGE",
            price: 12.90,
            image: "1000011773.jpg"
        },
        {
            id: 32,
            name: "NETTOIE EN DOUCEUR, LAISSE LA PEAU DOUCE",
            price: 12.90,
            image: "1000011917.jpg"
        },
        {
            id: 33,
            name: "PARFUM INTENSE ET LONGUE DUREE!",
            price: 14.00,
            image: "137711701101263260_vdm.jpg"
        },
        {
            id: 33,
            name: "PARFUM INTENSE ET LONGUE DUREE!",
            price: 14.00,
            image: "pago.png"
        },
    ]
};

// Panier
let cart = [];

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    updateCartCount();
});

// Rendre les produits
function renderProducts() {
    renderProductSection('parfums', 'parfumsGrid');
    renderProductSection('soins', 'soinsGrid');
    renderProductSection('cheveux', 'cheveuxGrid');
    renderProductSection('corps', 'corpsGrid');
    renderProductSection('complements', 'complementsGrid');
    renderProductSection('maquillage', 'maquillageGrid');
}

function renderProductSection(category, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const categoryProducts = products[category] || [];
    
    grid.innerHTML = categoryProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="image-placeholder" style="display:none;">
                    <p>${product.name}<br>Image: ${product.image}</p>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">€${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn-add" onclick="addToCart(${product.id})">Ajouter</button>
                    <button class="btn-choose" onclick="addToCart(${product.id})">Choisir</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Event Listeners
function setupEventListeners() {
    // Search
    document.getElementById('searchBtn').addEventListener('click', () => {
        document.getElementById('searchModal').classList.add('active');
        document.getElementById('searchInput').focus();
    });

    document.getElementById('closeSearch').addEventListener('click', () => {
        document.getElementById('searchModal').classList.remove('active');
    });

    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // Cart
    document.getElementById('cartBtn').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('active');
    });

    document.getElementById('closeCart').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.remove('active');
    });

    // Close modals on outside click
    document.getElementById('searchModal').addEventListener('click', (e) => {
        if (e.target.id === 'searchModal') {
            document.getElementById('searchModal').classList.remove('active');
        }
    });
}

// Recherche
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }

    const allProducts = Object.values(products).flat();
    const filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        resultsContainer.innerHTML = '<p style="padding: 1rem; color: #666;">Aucun résultat trouvé</p>';
        return;
    }

    resultsContainer.innerHTML = filtered.map(product => `
        <div class="search-result-item" onclick="addToCart(${product.id}); document.getElementById('searchModal').classList.remove('active');">
            <strong>${product.name}</strong>
            <div style="color: var(--accent-color); margin-top: 0.5rem;">€${product.price.toFixed(2)}</div>
        </div>
    `).join('');
}

// Ajouter au panier
function addToCart(productId) {
    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    renderCart();
    
    // Ouvrir le panier automatiquement
    document.getElementById('cartSidebar').classList.add('active');
}

// Retirer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Rendre le panier
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        cartTotal.textContent = '€0,00';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22%3EImage%3C/text%3E%3C/svg%3E'">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">€${item.price.toFixed(2)} x ${item.quantity}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">&times;</button>
        </div>
    `).join('');

    cartTotal.textContent = `€${total.toFixed(2)}`;
}



// --- FONCTIONNALITÉS DE COMMANDE ---

// Ouvrir le formulaire de commande quand on clique sur "Passer la commande"
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Votre panier est vide.");
        return;
    }
    document.getElementById('orderModal').classList.add('active');
});

// Fermer le formulaire
document.getElementById('closeOrder').addEventListener('click', () => {
    document.getElementById('orderModal').classList.remove('active');
});

// Fonction pour envoyer la commande
function processOrder(method) {
    const name = document.getElementById('clientName').value;
    const addr = document.getElementById('clientAddress').value;
    const phone = document.getElementById('clientPhone').value;

    if (!name || !addr || !phone) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return;
    }

    // Préparation du texte de la commande
    let message = `*NOUVELLE COMMANDE - LES REVES D'AUREL*\n\n`;
    message += `*Nom:* ${name}\n`;
    message += `*Adresse:* ${addr}\n`;
    message += `*Tél:* ${phone}\n\n`;
    message += `*PRODUITS :*\n`;

    cart.forEach(item => {
        message += `- ${item.name} (x${item.quantity}) : ${(item.price * item.quantity).toFixed(2)}€\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n*TOTAL : ${total.toFixed(2)}€*`;

    if (method === 'whatsapp') {
        const myNumber = "237696280190"; // REMPLACE ICI (ex: 237612345678)
        // Utilisation de l'API universelle WhatsApp
        const waUrl = `https://api.whatsapp.com/send?phone=${myNumber}&text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    } 
    if (method === 'email') {
        const myEmail = "tonemail@exemple.com"; // Assurez-vous que c'est bien votre email
        const subject = `Commande de ${name}`;
        
        // On utilise encodeURIComponent pour s'assurer que les caractères spéciaux ne bloquent pas
        const mailtoUrl = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        
        // Essayer d'ouvrir dans une nouvelle fenêtre pour éviter de bloquer la page actuelle
        const emailWindow = window.open(mailtoUrl, 'gladiateur715@gmail.com');
        
        // Petit message de secours si l'appli mail ne s'ouvre pas
        setTimeout(() => {
            if (!emailWindow || emailWindow.closed) {
                alert("Si votre application de messagerie ne s'est pas ouverte, envoyez votre commande à : " + myEmail);
            }
        }, 500);
    }

    // Modifie cette partie pour que le panier se ferme et le formulaire s'ouvre
document.querySelector('.checkout-btn').onclick = function() {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }
    document.getElementById('cartDrawer').classList.remove('active'); // Ferme le panier
    document.getElementById('orderModal').classList.add('active');    // Ouvre le formulaire
};
}

// Liaison avec les boutons du formulaire
document.getElementById('submitWhatsApp').addEventListener('click', () => processOrder('whatsapp'));
document.getElementById('submitEmail').addEventListener('click', () => processOrder('email'));

// --- ACCÈS SÉCURISÉ ADMIN ---
function accessAdmin() {
    const password = prompt("Veuillez entrer le code administrateur :");
    if (password === "1234") { // Changez "1234" par votre code secret
        document.getElementById('admin-panel').style.display = 'block';
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        alert("Accès refusé.");
    }
}

// --- GESTION DE L'AJOUT PRODUIT ---
document.getElementById('adminForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const category = document.getElementById('newProdCategory').value;
    const newProduct = {
        id: Date.now(),
        name: document.getElementById('newProdName').value.toUpperCase(),
        price: parseFloat(document.getElementById('newProdPrice').value),
        image: document.getElementById('newProdImage').value
    };
    
    // Ajout dynamique au tableau existant
    products[category].push(newProduct);
    
    // Mise à jour de l'affichage du site
    renderProducts();
    
    alert("Produit ajouté avec succès !");
    this.reset();
});

// --- ENVOI DE LA COMMANDE (WhatsApp & Email) ---
// (À placer dans la fonction qui gère la soumission finale de votre formulaire client)
function sendOrder(type) {
    const name = document.getElementById('clientName').value;
    const addr = document.getElementById('clientAddress').value;
    const phone = document.getElementById('clientPhone').value;

    if(!name || !addr || !phone) return alert("Remplissez vos coordonnées");

    let text = `Bonjour, commande de ${name}\nAdresse: ${addr}\nTél: ${phone}\n\nArticles:\n`;
    cart.forEach(item => {
        text += `- ${item.name} (${item.quantity}x)\n`;
    });
    
    const total = document.getElementById('cartTotal').textContent;
    text += `\nTotal: ${total}`;

    if(type === 'wa') {
        window.open(`https://wa.me/2376XXXXXXXX?text=${encodeURIComponent(text)}`); // Remplacez le numéro
    } else {
        window.location.href = `mailto:votre@email.com?subject=Nouvelle Commande&body=${encodeURIComponent(text)}`;
    }
}