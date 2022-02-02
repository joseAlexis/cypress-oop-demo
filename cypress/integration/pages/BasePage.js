import CartPage from "./CartPage";

class BasePage {
    btnBurgerMenu = `button#react-burger-menu-btn`;
    lnkShoopingCart = `a.shopping_cart_link`;

    navigateToCart() {
        cy.get(this.lnkShoopingCart).click();
        return new CartPage();
    }
}

module.exports = BasePage;