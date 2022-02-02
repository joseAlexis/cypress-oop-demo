/// <reference types="Cypress" />

import ItemPage from "./ItemPage";
const BasePage = require("./BasePage");

class InventoryPage extends BasePage {
    lblHeader = `span.title`;
    mdlItems = `div.inventory_item`;

    getHeader() {
        return cy.get(this.lblHeader);
    }

    clickOnItem() {
        cy.get(this.mdlItems).then(items => {
            const random = Math.floor(Math.random() * items.length);
            cy.wrap(items[random]).find('div.inventory_item_label > a').click();
           
        });
        return new ItemPage();
    }

    // addItemToCart(itemsToAdd) {
    //     const itemsList = [];
    //     let itemsAdded = 0;

    //     const item = new Item();


    //         while (itemsList.length < itemsToAdd) {
    //            

    //             if(itemsList.find(randomItem))
    //             item.id = randomItem;

    //             cy.wrap(items[item.id]).find("div.inventory_item_name").invoke("text").then(itemName => {
    //                 item.name = itemName;
    //             });

    //             cy.wrap(items[item.id]).find("div.inventory_item_desc").invoke("text").then(itemDescription => {
    //                 item.description = itemDescription;
    //             });

    //             cy.wrap(items[item.id]).find("div.inventory_item_price").invoke("text").then(itemPrice => {
    //                 item.price = itemPrice;
    //             });

    //             itemsList.push(item);
    //             cy.wrap(items[item.id]).find(`button.btn_inventory`).click();                

    //         }


    //     return item;
    // }

    navigateToCart() {
        return super.navigateToCart();
    }
}

export default InventoryPage;