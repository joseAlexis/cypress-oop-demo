class InventoryPage {
  elements = {
    lblHeader: () => cy.get(`span.title`),
    productsContainer: () => cy.get(`#inventory_container`),
    mdlItems: () => cy.get(`div.inventory_item`),
    cart: () => cy.get(`.shopping_cart_link`),
  };

  addToCart(name: string) {
    let itemFound = false;
    this.elements
      .mdlItems()
      .each((item) => {
        const itemName = item.find(`.inventory_item_name`).text();
        if (itemName === name) {
          itemFound = true;
          cy.wrap(item).scrollIntoView();
          cy.wrap(item).find(`.btn_inventory`).click();
        }
      })
      .then(() => {
        if (!itemFound) throw new Error(`The item ${name} does not exists`);
      });
  }

  getCartBadge() {
    return this.elements.cart().children(`.shopping_cart_badge`);
  }

  navigateToItem(name: string) {
    cy.contains(".inventory_item_name", name).scrollIntoView().click();
  }

  getHeader() {
    return this.elements.lblHeader();
  }

  navigateToCart() {
    this.elements.cart().click();
  }
}

export const inventoryPage = new InventoryPage();
