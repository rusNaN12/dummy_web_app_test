import loginPage from "../pages/loginPage"

describe("Checkout page testing scenarios", () => {
  beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  const username = Cypress.env("normal");
  const password = Cypress.env("password");
  cy.visit("/");
  loginPage.login(username, password);
  });

  it("Check Checkout on process with 1 item", () => {

  })

  it("Check all data on order is passed correctly", () => {
  })

  it("Check Checkout on process with 1 item", () => {
  })

})
