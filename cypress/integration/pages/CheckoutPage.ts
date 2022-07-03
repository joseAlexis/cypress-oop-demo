// const BasePage = require("./BasePage");
import BasePage from "./BasePage";

class CheckoutPage extends BasePage {

    elements = {
        // Step 1
        txtFirstName: () => cy.get('input[data-test="firstName"]'),
        txtLastName: () => cy.get('input[data-test="lastName"]'),
        txtPostalCode: () => cy.get('input[data-test="postalCode"]'),
        btnContinue: () => cy.get('input[data-test="continue"]'),

        // Step 2
        summaryInfo: () => cy.get('div.summary_info'),
        btnFinish: () => cy.get('[data-test="finish"]'),

        // Step 3
        confirmationHeader: () => cy.get('h2.complete-header'),
        confirmationText: () => cy.get('div.complete-text')
    }

    fillYourInformation(CustomerDTO) {
        this.elements.txtFirstName().type(CustomerDTO.firstName);
        this.elements.txtLastName().type(CustomerDTO.lastName);
        this.elements.txtPostalCode().type(CustomerDTO.zipCode);
    }

    clickContinueStepOne() {
        this.elements.btnContinue().click();
    }

    clickFinish() {
        this.elements.btnFinish().click();
    }
}

export const checkoutPage = new CheckoutPage();

// module.exports = new CheckoutPage();