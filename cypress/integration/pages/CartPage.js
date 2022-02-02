

class CartPage {
    lnkShoopingCart = `a.shopping_cart_link`;
    mdlCartItems = `div.cart_item`
    lblIventoryName = `div.inventory_item_name`;
    lblInventoryDescription = `div.inventory_item_desc`;
    lblInventoryPrice = `div.inventory_item_price`;

    // navigateToCart() {
    //     cy.get(this.lnkShoopingCart).click();
    // }

    getItemName() {
        return cy.get(this.lblIventoryName);
    }

    getItemDescription() {
        return cy.get(this.lblInventoryDescription);
    }

    getItemPrice() {
        return cy.get(this.lblInventoryPrice);
    }
} 
export default CartPage;