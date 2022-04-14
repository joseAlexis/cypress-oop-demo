class BasePage {
    btnBurgerMenu = () => cy.get(`button#react-burger-menu-btn`);
    lnkShoopingCart = () => cy.get(`a.shopping_cart_link`);

    navigateToCart() {
        this.lnkShoopingCart().click();
    }
}

module.exports = BasePage;