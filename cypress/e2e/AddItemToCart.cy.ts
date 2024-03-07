import { cartPage } from "../support/pages/CartPage";
import { inventoryPage } from "../support/pages/InventoryPage";
import { itemPage } from "../support/pages/ItemPage";
import { checkoutPage } from "../support/pages/CheckoutPage";

import Item from "../support/model/Item";

describe("Login Page Suite", () => {
  let item = new Item();

  before(function () {
    cy.clearLocalStorageSnapshot();
    cy.fixture("users").then((users) => {
      cy.appLogin(users.usernames.standard, users.password);
    });
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  describe("TC-0001 | Test login", () => {
    it("Should select an item", function () {
      inventoryPage.clickOnItem();
      itemPage.getImage().should("be.visible");
    });

    it("Should add item into the cart", function () {
      item = itemPage.addToCart(item);
      itemPage.getButton().should("have.text", "Remove");
    });

    it("Should navigate to the cart and validate the elements in there", function () {
      itemPage.navigateToCart();
      cy.validateCartItems(item);
    });

    it("Should continue to checkout", function () {
      cartPage.clickCheckout();
      checkoutPage
        .secondaryHeader()
        .should("be.visible")
        .and("have.text", "Checkout: Your Information");
    });

    it('Should complete "Your Information" page', function () {
      cy.task("getCustomerInfo").then(function (customer) {
        checkoutPage.fillYourInformation(customer);
      });
      checkoutPage.clickContinueStepOne();
      checkoutPage
        .secondaryHeader()
        .should("be.visible")
        .and("have.text", "Checkout: Overview");
    });

    it("Should confirm and complete the order", function () {
      cy.validateCartItems(item);
      checkoutPage.elements.summaryInfo().should("be.visible");
      checkoutPage.clickFinish();
      checkoutPage.elements
        .confirmationHeader()
        .should("be.visible")
        .and("have.text", "THANK YOU FOR YOUR ORDER");
      checkoutPage.elements
        .confirmationText()
        .should("be.visible")
        .and(
          "have.text",
          "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
        );
    });
  });
});
