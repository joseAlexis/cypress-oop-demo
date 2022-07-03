import BasePage from "./BasePage";

class InventoryPage extends BasePage {
    elements = {
        lblHeader: () => cy.get(`span.title`),
        mdlItems: () => cy.get(`div.inventory_item`)
    }

    clickOnItem() {
        this.elements.mdlItems().then(items => {
            const random = Math.floor(Math.random() * items.length);
            cy.wrap(items[random]).find('div.inventory_item_label > a').click();

        });
    }

    getHeader() {
        return this.elements.lblHeader();
    }
}

export const inventoryPage = new InventoryPage();
// module.exports = new InventoryPage();