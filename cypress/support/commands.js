import "cypress-localstorage-commands";

import CartPage from "../integration/pages/CartPage";

Cypress.Commands.add('validateCartItems', (ItemDTO) => {
    CartPage.elements.listCartItems().each(item => {
        expect(item.find('div.inventory_item_name').text()).to.eq(ItemDTO.name);
        expect(item.find('div.inventory_item_desc').text()).to.eq(ItemDTO.description);
        expect(item.find('div.inventory_item_price').text()).to.eq(ItemDTO.price)
    });
});