import { cartPage } from "../integration/pages/CartPage";
import Item from "../integration/model/Item";

declare global {
    namespace Cypress {
        interface Chainable {
            validateCartItems(Item: Item): typeof validateCartItems
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