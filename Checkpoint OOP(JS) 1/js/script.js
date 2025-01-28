// Classe pour les produits
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Classe pour un élément du panier
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Calculer le prix total pour cet élément
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Classe pour le panier d'achat
class ShoppingCart {
    constructor() {
        this.tableau = [];
    }

    
  
}

