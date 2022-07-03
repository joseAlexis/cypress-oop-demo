/// <reference types="cypress" />

import { loginPage } from "../integration/pages/LoginPage";

export const appLogin = (username: string, password: string) => {
    loginPage.visit();
    loginPage.getLoginForm().should("be.visible");

    loginPage.typeUsername(username);
    loginPage.typePassword(password);
    loginPage.clickLogin();

    cy.getCookies().should('have.length', 1).then(cookies => {
        expect(cookies[0].value).to.eq(username);
    })
}