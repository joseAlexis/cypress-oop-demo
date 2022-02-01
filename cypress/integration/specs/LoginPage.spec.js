/// <reference types="Cypress" />

import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();

describe("Login Page Suite", () => {

    before(function() {
        cy.fixture("users").as("users");     
    });

    describe("TC-0001 | Test login", () => {

        it("Should navigate to the login page", function() {
            cy.visit("/#");
        });

        it("Should enter credentials and click on login", function() {
            loginPage.getUsername().type(this.users.usernames.standard);
            loginPage.getPassword().type(this.users.password);
        });
    });
});