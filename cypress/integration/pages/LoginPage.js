/// <reference types="Cypress" />
import InventoryPage from "./InventoryPage";

class LoginPage {
    frmLogin = `div.login_wrapper`;
    txtUserName = `input[data-test="username"]`;
    txtPassword = `input[data-test="password"]`;
    btnLogin = `input[data-test="login-button"]`;

    visit() {
        cy.visit("/#");
    }

    typeUsername(username) {
        cy.get(this.txtUserName)
            .clear()
            .type(username);
    }

    typePassword(password) {
        cy.get(this.txtPassword)
            .clear()
            .type(password);
    }

    clickLogin() {
        cy.get(this.btnLogin).click();
        return new InventoryPage();
    }

    getLoginForm() {
        return cy.get(this.frmLogin);
    }

    get username() {
        return cy.get(this.txtUserName);
    }

    get password() {
        return cy.get(this.txtPassword);
    }

    get loginButton() {
        return cy.get(this.btnLogin)
    }
}
export default LoginPage;
// module.exports = new LoginPage();