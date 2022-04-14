class CartPage {
    elements = {
        lnkShoopingCart: () => cy.get(`a.shopping_cart_link`),
        mdlCartItems: () => cy.get(`div.cart_item`),
        lblIventoryName: () => cy.get(`div.inventory_item_name`),
        lblInventoryDescription: () => cy.get(`div.inventory_item_desc`),
        lblInventoryPrice: () => cy.get(`div.inventory_item_price`)
    }

    getItemName() {
        return this.elements.lblIventoryName().invoke('text');
    }

    getItemDescription() {
        return this.elements.lblInventoryDescription().invoke('text');
    }

    getItemPrice() {
        return this.elements.lblInventoryPrice().invoke('text');
    }
}

module.exports = new CartPage();