import { cartPage } from "../support/pages/CartPage";
import { inventoryPage } from "../support/pages/InventoryPage";
import { itemPage } from "../support/pages/ItemPage";

describe("Inventory page", () => {
  beforeEach(function () {
    cy.appLogin("standard_user", "secret_sauce");
  });

  it("Should add an item to the cart", () => {
    const item = "Sauce Labs Bolt T-Shirt";
    inventoryPage.addToCart(item);
    inventoryPage.getCartBadge().should("have.text", 1);
  });

  it("Should open a product", () => {
    const itemName = "Sauce Labs Bike Light";
    inventoryPage.navigateToItem(itemName);
    itemPage.elements.name().should("be.visible").and("have.text", itemName);
  });

  it("Should navigate to your cart", () => {
    const itemName = "Sauce Labs Onesie";
    inventoryPage.addToCart(itemName);
    inventoryPage.navigateToCart();
    cartPage.getItemQuantity(0).should("be.visible").and("have.text", "1");
    cartPage.getItemName(0).should("be.visible").and("have.text", itemName);
  });
});
