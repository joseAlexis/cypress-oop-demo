class CheckoutPage {
    elements = {
        txtFirstName: () => cy.get('input[data-test="firstName"]'),
        txtLastName: () => cy.get('input[data-test="lastName"]'),
        txtPostalCode: () => cy.get('input[data-test="postalCode"]'),
        btnContinue: () => cy.get('input[data-test="continue"]')
    }

    fillYourInformation() {
        this.elements.txtFirstName().type();
        this.elements.txtLastName().type();
        this.elements.txtPostalCode().type();
    }

    clickContinue() {
        this.elements.btnContinue().click();
    }
}

module.exports = new CheckoutPage();