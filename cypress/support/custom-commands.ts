import { cartPage } from "../integration/pages/CartPage";
import Item from "../integration/model/Item";
import { loginPage } from "../integration/pages/LoginPage";

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Validate the items previously stored in the cart
             * @param Item Object with the item information
             */
            validateCartItems(Item: Item): typeof validateCartItems

            /**
             * User login
             * @param username 
             * @param password 
             */
            appLogin(username: string, password: string): typeof appLogin
        }
    }
}

export const validateCartItems = (itemDTO: Item) => {
    cartPage.elements.listCartItems().each(item => {
        expect(item.find('div.inventory_item_name').text()).to.eq(itemDTO.name);
        expect(item.find('div.inventory_item_desc').text()).to.eq(itemDTO.description);
        expect(item.find('div.inventory_item_price').text()).to.eq(itemDTO.price)
    });
}

export const appLogin = (username: string, password: string) => {
    loginPage.visit();
    loginPage.getLoginForm().should("be.visible");

    loginPage.typeUsername(username);
    loginPage.typePassword(password);
    loginPage.clickLogin();

    cy.getCookies().should('have.length', 1).then(cookies => {
        expect(cookies[0].value).to.eq(username);
    });
}