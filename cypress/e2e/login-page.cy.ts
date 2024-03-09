import { inventoryPage } from "../support/pages/InventoryPage";
import { loginPage } from "../support/pages/LoginPage";

describe("Login page", () => {
  beforeEach(function () {
    cy.fixture("users.json").then((users) => {
      this.users = users.usernames;
      this.password = users.password;
    });

    loginPage.visit();
  });

  it("Should login with valid credentials", function () {
    loginPage.typeUsername(this.users.standard);
    loginPage.typePassword(this.password);
    loginPage.clickLogin();
    inventoryPage.elements.productsContainer().should("be.visible");
    cy.getCookie("session-username").should("exist");
  });

  it("Should get an error loggin in with a locked user ", function () {
    loginPage.typeUsername(this.users.locked_out);
    loginPage.typePassword(this.password);
    loginPage.clickLogin();
    loginPage.elements
      .errorMessage()
      .should("be.visible")
      .and("contain", "Sorry, this user has been locked out.");
  });
});
