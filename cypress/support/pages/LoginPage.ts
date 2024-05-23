class LoginPage {
  elements = {
    loginForm: () => cy.get(`div.login_wrapper`),
    txtUserName: () => cy.get(`input[data-test="username"]`),
    txtPassword: () => cy.get(`input[data-test="password"]`),
    btnLogin: () => cy.get(`input[data-test="login-button"]`),
    errorMessage: () => cy.get(`[data-test="error"]`),
  };

  visit() {
    cy.visit("/#");
  }

  typeUsername(username) {
    this.elements.txtUserName().clear().type(username);
  }

  typePassword(password) {
    this.elements.txtPassword().clear().type(password, { log: false });
  }

  clickLogin() {
    this.elements.btnLogin().click();
  }
}

export const loginPage = new LoginPage();
