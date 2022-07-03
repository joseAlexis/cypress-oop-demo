import { loginPage } from "../pages/LoginPage";
import { cartPage } from "../pages/CartPage";
import { inventoryPage } from "../pages/InventoryPage";
import { itemPage } from "../pages/ItemPage";
import { checkoutPage } from "../pages/CheckoutPage";

import Item from "../model/Item";

Cypress.Cookies.defaults({
    preserve: "session-username"
});

describe("Login Page Suite", () => {

    let item = new Item();

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
            loginPage.visit();
            loginPage.getLoginForm().should("be.visible");
        });

        it("Should enter credentials and click on login", function () {
            loginPage.typeUsername(this.users.usernames.standard);
            loginPage.typePassword(this.users.password);
            loginPage.clickLogin();
            inventoryPage.getHeader().should("be.visible").and("have.text", "Products");
        });

        it("Should select an item", function () {
            inventoryPage.clickOnItem();
            itemPage.getImage().should("be.visible");
        });

        it("Should add item into the cart", function () {
            item = itemPage.addToCart(item);
            itemPage.getButton().should("have.text", "Remove")
        });

        it("Should navigate to the cart and validate the elements in there", function () {
            itemPage.navigateToCart();
            cy.validateCartItems(item);
        });

        it('Should continue to checkout', function () {
            cartPage.clickCheckout();
            checkoutPage.secondaryHeader().should('be.visible').and('have.text', 'Checkout: Your Information')
        });

        it('Should complete "Your Information" page', function () {
            checkoutPage.fillYourInformation(this.customer);
            checkoutPage.clickContinueStepOne();
            checkoutPage.secondaryHeader().should('be.visible').and('have.text', 'Checkout: Overview')
        });

        it('Should confirm and complete the order', function () {
            cy.validateCartItems(item);
            checkoutPage.elements.summaryInfo().should('be.visible');
            checkoutPage.clickFinish();
            checkoutPage.elements.confirmationHeader().should('be.visible').and('have.text', 'THANK YOU FOR YOUR ORDER');
            checkoutPage.elements.confirmationText().should('be.visible').and('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        });
    });
});