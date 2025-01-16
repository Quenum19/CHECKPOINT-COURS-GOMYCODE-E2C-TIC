// Incrémentation et décrémentation des boutons + et -
document.querySelectorAll(".card-body").forEach(card => {
    const btnPlus = card.querySelector(".fa-plus-circle");
    const btnMinus = card.querySelector(".fa-minus-circle");
    const quantityDisplay = card.querySelector(".quantity");
    const btnDel = card.querySelector(".fa-trash-alt");
    const btnLike = card.querySelector(".fa-heart");
    const unitPriceElement = card.querySelector(".price-unit");
    const textPriceTotal = document.getElementById("price-total"); 

    let quantity = 0;
    let priceTotal = 0;
    let unitPrice = parseFloat(unitPriceElement.textContent);

    // Fonction pour incrémenter la quantité
    function incrementer() {
        quantity += 1;
        priceTotal = quantity * unitPrice;
        quantityDisplay.textContent = quantity; 
        updatePriceTotal(priceTotal); 
    }

    // Fonction pour décrémenter la quantité
    function décrementer() {
        if (quantity > 0) { 
            quantity -= 1;
            priceTotal = quantity * unitPrice;
            quantityDisplay.textContent = quantity;
            updatePriceTotal(-unitPrice); 
        }
    }

    // Fonction pour supprimer un article
    function delArticle() {
        card.remove(); 
        updatePriceTotal(-priceTotal);
    }

    // Fonction pour aimer un article
    function LikeArticle() {
        btnLike.style.color = "red"; 
    }

    // Fonction pour mettre à jour le prix total global
    function updatePriceTotal(amount) {
        let currentTotal = parseFloat(textPriceTotal.textContent.replace(' $', '') || '0'); 
        currentTotal += amount; // Met à jour le prix global
        textPriceTotal.textContent = currentTotal.toFixed(2) + ' $';
    }

    // Ajouter les écouteurs d'événements
    btnPlus.addEventListener("click", incrementer);
    btnMinus.addEventListener("click", décrementer);
    btnDel.addEventListener("click", delArticle);
    btnLike.addEventListener("click", LikeArticle);
});
