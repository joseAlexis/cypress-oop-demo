export default class BasePage {
    btnBurgerMenu = () => cy.get(`button#react-burger-menu-btn`);
    lnkShoopingCart = () => cy.get(`a.shopping_cart_link`);
    secondaryHeader = () => cy.get('div.header_secondary_container > span.title')

    navigateToCart() {
        this.lnkShoopingCart().click();
    }
}
// const export default basePage = new BasePage()

// module.exports = BasePage;