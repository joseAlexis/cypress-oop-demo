class LoginPage {
    elements = {
        frmLogin: () => cy.get(`div.login_wrapper`),
        txtUserName: () => cy.get(`input[data-test="username"]`),
        txtPassword: () => cy.get(`input[data-test="password"]`),
        btnLogin: () => cy.get(`input[data-test="login-button"]`)
    }


    visit() {
        cy.visit("/#");
    }

    typeUsername(username) {
        this.elements.txtUserName()
            .clear()
            .type(username);
    }

    typePassword(password) {
        this.elements.txtPassword()
            .clear()
            .type(password);
    }

    clickLogin() {
        this.elements.btnLogin().click();
    }

    getLoginForm() {
        return this.elements.frmLogin();
    }
}

export const loginPage = new LoginPage();