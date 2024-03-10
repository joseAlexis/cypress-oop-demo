import { cartPage } from "../support/pages/CartPage";
import { inventoryPage } from "../support/pages/InventoryPage";

describe("Cart page", () => {
  beforeEach(function () {
    cy.appLogin("standard_user", "secret_sauce");

    const itemName = "Sauce Labs Onesie";
    inventoryPage.addToCart(itemName);
    inventoryPage.navigateToCart();
  });

  it("Should be able to do checkout", () => {
    cartPage.clickCheckout();
    cy.url().should("eq", `${Cypress.config().baseUrl}/checkout-step-one.html`);
  });

  it("Should remove item from cart", () => {
    cartPage.removeItem(0);
    cartPage.elements.items().should("not.exist");
  });
});
