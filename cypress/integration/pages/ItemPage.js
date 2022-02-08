import Item from "../model/Item";
const BasePage = require("./BasePage");

class ItemPage extends BasePage {
    imgProduct = `img.inventory_details_img`;
    lblName = `div.inventory_details_name`;
    lblDescription = `div.inventory_details_desc`;
    lblPrice = `div.inventory_details_price`;
    btnAddToCart = `button.btn_inventory`

    getImage() {
        return cy.get(this.imgProduct);
    }

    addToCart() {
        
        const item = new Item();

        cy.get(this.lblName).invoke("text").then(text => {
            item.name = text;
        });

        cy.get(this.lblDescription).invoke("text").then(text => {
            item.desription = text;
        });

        cy.get(this.lblPrice).invoke("text").then(text => {
            item.price = text;
        });

        cy.get(this.btnAddToCart).click();

        return item;
    }

    getButton() {
        return cy.get(this.btnAddToCart);
    }
}
export default ItemPage;