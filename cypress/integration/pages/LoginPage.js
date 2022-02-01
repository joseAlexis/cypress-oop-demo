/// <reference types="Cypress" />

class LoginPage {

    txtUserName = `input[data-test="username"]`;
    txtPassword = `input[data-test="password"]`;
    btnLogin = `input[data-test="login-button"]`;

    getUsername() {
        return cy.get(this.txtUserName);
    }

    getPassword() {
        return cy.get(this.txtPassword);
    }

    getLoginButton() {
        return cy.get(this.btnLogin)
    }
}

export default LoginPage;