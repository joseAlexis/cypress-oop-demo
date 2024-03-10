class CartPage {
  elements = {
    lnkShoopingCart: () => cy.get(`a.shopping_cart_link`),
    items: () => cy.get(`div.cart_item`),
    btnCheckout: () => cy.get('button[data-test="checkout"]'),
  };

  getItemQuantity(index: number) {
    return this.elements.items().eq(index).find(`.cart_quantity`);
  }

  getItemName(index: number) {
    return this.elements.items().eq(index).find(`.inventory_item_name`);
  }

  removeItem(index: number) {
    return this.elements
      .items()
      .eq(index)
      .find(`[data-test*="remove-"]`)
      .click();
  }

  clickCheckout() {
    this.elements.btnCheckout().click();
  }
}

export const cartPage = new CartPage();
