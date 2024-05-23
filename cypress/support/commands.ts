import "cypress-localstorage-commands";

import { loginPage } from "./pages/LoginPage";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * User login
       * @param username
       * @param password
       */
      appLogin(username: string, password: string): void;
    }
  }
}

Cypress.Commands.add("appLogin", (username: string, password: string) => {
  loginPage.visit();
  loginPage.elements.loginForm().should("be.visible");

  loginPage.typeUsername(username);
  loginPage.typePassword(password);
  loginPage.clickLogin();

  cy.document().its("cookie").should("contain", "session-username");
});
