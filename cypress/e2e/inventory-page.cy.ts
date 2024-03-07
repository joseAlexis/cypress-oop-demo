import { inventoryPage } from "../support/pages/InventoryPage";

describe("Inventory page", () => {
  beforeEach(function () {
    cy.appLogin("standard_user", "secret_sauce");
  });

  it("Should add an item to the cart", () => {
    inventoryPage.clickOnItem();
  });

  it("Should do something else", () => {
    inventoryPage.navigateToCart();
  });
});
