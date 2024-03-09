class CartPage {
  elements = {
    lnkShoopingCart: () => cy.get(`a.shopping_cart_link`),
    listCartItems: () => cy.get(`div.cart_item`),
    btnCheckout: () => cy.get('button[data-test="checkout"]'),
  };

  getItemDetails() {
    const itemList = [];

    this.elements.listCartItems().each((item) => {
      itemList.push({
        name: item.find("div.inventory_item_name").text(),
        description: item.find("div.inventory_item_desc").text(),
        price: item.find("div.inventory_item_price").text(),
      });
    });

    return itemList;
  }

  clickCheckout() {
    this.elements.btnCheckout().click();
  }
}

export const cartPage = new CartPage();
