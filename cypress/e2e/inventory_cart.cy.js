import loginPage from "../pages/loginPage"

describe("Inventory and cart page testing scenarios", () => {
  beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  const username = Cypress.env("normal");
  const password = Cypress.env("password");
  cy.visit("/");
  loginPage.login(username, password);

  });

  it("Check user is able to add a element to cart from inventory-item  page", () => {

  })

  it("Check user is able to add a element to cart from inventory page", () => {
  })

  it("Check  user has no add cart functionality for non existing items ", () => {
  })

  it("Check user is not able to add an  non existing element to cart ", () => {
  })

})
