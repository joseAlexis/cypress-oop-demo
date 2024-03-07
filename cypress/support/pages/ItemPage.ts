import BasePage from "./BasePage";
import Item from "../model/Item";

class ItemPage extends BasePage {
    elements = {
        imgProduct: () => cy.get(`img.inventory_details_img`),
        lblName: () => cy.get(`div.inventory_details_name`),
        lblDescription: () => cy.get(`div.inventory_details_desc`),
        lblPrice: () => cy.get(`div.inventory_details_price`),
        btnAddToCart: () => cy.get(`button.btn_inventory`)
    }

    getImage() {
        return this.elements.imgProduct();
    }

    addToCart(item: Item) {
        // const item = new Item();

        this.elements.lblName().invoke("text").then(text => {
            item.name = text;
        });

        this.elements.lblDescription().invoke("text").then(text => {
            item.desription = text;
        });

        this.elements.lblPrice().invoke("text").then(text => {
            item.price = text;
        });

        this.elements.btnAddToCart().click();

        return item;
    }

    getButton() {
        return this.elements.btnAddToCart();
    }
}
export const itemPage = new ItemPage();