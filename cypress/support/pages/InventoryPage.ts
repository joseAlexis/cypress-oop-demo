import BasePage from "./BasePage";

class InventoryPage extends BasePage {
  elements = {
    lblHeader: () => cy.get(`span.title`),
    productsContainer: () => cy.get(`#inventory_container`),
    mdlItems: () => cy.get(`div.inventory_item`),
    cart: () => cy.get(`.shopping_cart_link`),
  };

  clickOnItem() {
    this.elements.mdlItems().then((items) => {
      const random = Math.floor(Math.random() * items.length);
      cy.wrap(items[random]).find("div.inventory_item_label > a").click();
    });
  }

  getHeader() {
    return this.elements.lblHeader();
  }

  openCart() {
    this.elements.cart().click();
  }
}

export const inventoryPage = new InventoryPage();
