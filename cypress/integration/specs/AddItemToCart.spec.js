/// <reference types="Cypress" />

import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";
import InventoryPage from "../pages/InventoryPage";
import ItemPage from "../pages/ItemPage";
import CheckoutPage from "../pages/CheckoutPage";

Cypress.Cookies.defaults({
    preserve: "session-username"
})

describe("Login Page Suite", () => {

    let item = undefined;

    before(function () {
        cy.fixture("users").as("users");
        cy.clearLocalStorageSnapshot();
        cy.task('getCustomerInfo').then(function (customer) {
            this.customer = customer;
        })
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
            cy.validateCartItems(item);
        });

        it('Should continue to checkout', function () {
            CartPage.clickCheckout();
            CheckoutPage.secondaryHeader().should('be.visible').and('have.text', 'Checkout: Your Information')
        });

        it('Should complete "Your Information" page', function () {
            CheckoutPage.fillYourInformation(this.customer);
            CheckoutPage.clickContinueStepOne();
            CheckoutPage.secondaryHeader().should('be.visible').and('have.text', 'Checkout: Overview')
        });

        it('Should confirm and complete the order', function () {
            cy.validateCartItems(item);
            CheckoutPage.elements.summaryInfo().should('be.visible');
            CheckoutPage.clickFinish();
            CheckoutPage.elements.confirmationHeader().should('be.visible').and('have.text', 'THANK YOU FOR YOUR ORDER');
            CheckoutPage.elements.confirmationText().should('be.visible').and('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        });
    });
});