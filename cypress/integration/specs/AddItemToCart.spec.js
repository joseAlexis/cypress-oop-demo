/// <reference types="Cypress" />

import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";

Cypress.Cookies.defaults({
    preserve: "session-username"
})

describe("Login Page Suite", () => {

    const loginPage = new LoginPage();
    let inventoryPage = undefined;
    let itemPage = undefined;
    let cartPage = undefined;
    let item = undefined;

    before(function () {
        cy.fixture("users").as("users");
        cy.clearLocalStorageSnapshot();
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    describe("TC-0001 | Test login", () => {

        it("Should navigate to the login page", function () {
            loginPage.visit();
            loginPage.getLoginForm().should("be.visible");
        });

        it("Should enter credentials and click on login", function () {
            loginPage.typeUsername(this.users.usernames.standard);
            loginPage.typePassword(this.users.password);
            inventoryPage = loginPage.clickLogin();
            inventoryPage.getHeader().should("be.visible").and("have.text", "Products");
        });

        it("Should select an item", function () {
            itemPage = inventoryPage.clickOnItem();
            itemPage.getImage().should("be.visible");
        });

        it("Should add item into the cart", function () {            
            item = itemPage.addToCart();            
            itemPage.getButton().should("have.text", "Remove")
        });

        it("Should navigate to the cart and validate the elements in there", function () {            
            cartPage = itemPage.navigateToCart();
            cartPage.getItemName().invoke("text").then(text => {
                expect(text).to.be.eq(item.name)
            });            
            cartPage.getItemDescription().invoke("text").then(text => {
                expect(text).to.be.eq(item.description)
            });           
            cartPage.getItemPrice().invoke("text").then(text => {
                expect(text).to.be.eq(item.price)
            });   
        });
    });
});