/// <reference types="Cypress" />

import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";
import InventoryPage from "../pages/InventoryPage";
import ItemPage from "../pages/ItemPage";

Cypress.Cookies.defaults({
    preserve: "session-username"
})

describe("Login Page Suite", () => {

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
            LoginPage.visit();
            LoginPage.getLoginForm().should("be.visible");
        });

        it("Should enter credentials and click on login", function () {
            LoginPage.typeUsername(this.users.usernames.standard);
            LoginPage.typePassword(this.users.password);
            LoginPage.clickLogin();
            InventoryPage.getHeader().should("be.visible").and("have.text", "Products");
        });

        it("Should select an item", function () {
            InventoryPage.clickOnItem();
            ItemPage.getImage().should("be.visible");
        });

        it("Should add item into the cart", function () {
            item = ItemPage.addToCart();
            ItemPage.getButton().should("have.text", "Remove")
        });

        it("Should navigate to the cart and validate the elements in there", function () {
            ItemPage.navigateToCart();

            CartPage.getItemName().then(text => {
                expect(text).to.be.eq(item.name)
            });
            CartPage.getItemDescription().then(text => {
                expect(text).to.be.eq(item.description)
            });
            CartPage.getItemPrice().then(text => {
                expect(text).to.be.eq(item.price)
            });
        });
    });
});