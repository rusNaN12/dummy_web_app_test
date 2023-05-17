import loginPage from "../pages/loginPage"

describe("Login page testing scenarios", () => {
  beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

  it("Check success login with normal user", () => {
    const username = Cypress.env("normal");
    const password = Cypress.env("password");
    cy.visit("/");
    loginPage.login(username, password);
    cy.url().should('contain', Cypress.config("baseUrl") + "/inventory.html");

  })

  it("Check user can't login with wrong username and password", () => {
    const username = "test";
    const password = "test";
    cy.visit("/");
    loginPage.login(username, password);
    cy.url().should("contain", Cypress.config("baseUrl"));
    loginPage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');

  })

  it("Check user can't login with wrong  password and correct username", () => {
    const username = Cypress.env("normal");
    const password = "test";
    cy.visit("/");
    loginPage.login(username, password);
    cy.url().should("contain", Cypress.config("baseUrl"));
    loginPage.elements.errorMessage().should("have.text", "Epic sadface: Username and password do not match any user in this service");

  })

  it("Check user Login with blocked user", () => {
    const username = Cypress.env("locked");
    const password = Cypress.env("password");
    cy.visit("/");
    loginPage.login(username, password);
    cy.url().should("contain", Cypress.config("baseUrl"));
    loginPage.elements.errorMessage().should("have.text", "Epic sadface: Sorry, this user has been locked out.");
  })

})
