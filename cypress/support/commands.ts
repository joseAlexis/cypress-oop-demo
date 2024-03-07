import "cypress-localstorage-commands";

import { cartPage } from "./pages/CartPage";
import Item from "./model/Item";
import { loginPage } from "./pages/LoginPage";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Validate the items previously stored in the cart
       * @param Item Object with the item information
       */
      validateCartItems(Item: Item): void;

      /**
       * User login
       * @param username
       * @param password
       */
      appLogin(username: string, password: string): void;
    }
  }
}

Cypress.Commands.add("validateCartItems", (itemDTO: Item) => {
  cartPage.elements.listCartItems().each((item) => {
    expect(item.find("div.inventory_item_name").text()).to.eq(itemDTO.name);
    expect(item.find("div.inventory_item_desc").text()).to.eq(
      itemDTO.description
    );
    expect(item.find("div.inventory_item_price").text()).to.eq(itemDTO.price);
  });
});

Cypress.Commands.add("appLogin", (username: string, password: string) => {
  loginPage.visit();
  loginPage.getLoginForm().should("be.visible");

  loginPage.typeUsername(username);
  loginPage.typePassword(password);
  loginPage.clickLogin();

  cy.getCookies()
    .should("have.length", 1)
    .then((cookies) => {
      expect(cookies[0].value).to.eq(username);
    });
});
