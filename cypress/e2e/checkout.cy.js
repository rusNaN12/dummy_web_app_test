import loginPage from "../pages/loginPage"
import inventoryPage from "../pages/inventoryPage"
import checkoutPage from "../pages/checkoutPage"

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
    inventoryPage.elements.sauceLabsBoltTShirtName().click();
    inventoryPage.elements.sauceLabsBoltTShirtBtn().click();
    inventoryPage.elements.cartBtn().click();
    checkoutPage.elements.sauceLabsBoltTShirtName().should("have.text", "Sauce Labs Bolt T-Shirt");
    checkoutPage.elements.checkoutBtn().click();
    checkoutPage.elements.firstName().type("Dade");
    checkoutPage.elements.lastName().type("Murphy");
    checkoutPage.elements.zipCode().type("1337");
    checkoutPage.elements.continueBtn().click();
    checkoutPage.elements.finishBtn().click();
    checkoutPage.elements.checkoutTitle().should("have.text", "Checkout: Complete!")
    checkoutPage.elements.goBackHomeBtn().click();
    cy.url().should("include", "/inventory.html");
  })

  it("Check all data on order is passed correctly", () => {
    inventoryPage.elements.sauceLabsBoltTShirtName().click();
    inventoryPage.elements.sauceLabsBoltTShirtBtn().click();
    inventoryPage.elements.cartBtn().click();
    checkoutPage.elements.sauceLabsBoltTShirtName().should("have.text", "Sauce Labs Bolt T-Shirt");
    checkoutPage.elements.checkoutBtn().click();
    checkoutPage.elements.firstName().type("Dade");
    checkoutPage.elements.lastName().type("Murphy");
    checkoutPage.elements.zipCode().type("1337");
    checkoutPage.elements.continueBtn().click();
    checkoutPage.elements.itemTotal().should("have.text", "Item total: $15.99");
    checkoutPage.elements.tax().should("have.text", "Tax: $1.28");
    checkoutPage.elements.total().should("have.text", "Total: $17.27");
    checkoutPage.elements.finishBtn().click();
    checkoutPage.elements.checkoutTitle().should("have.text", "Checkout: Complete!")
    checkoutPage.elements.goBackHomeBtn().click();
    cy.url().should("include", "/inventory.html");
  })

  it("Check Checkout on process with 0 item", () => {
    //this test is supposed to faile as full chain of checkout is possible without any product in cart
    inventoryPage.elements.cartBtn().click();
    checkoutPage.elements.sauceLabsBoltTShirtName().should("not.exist");
    checkoutPage.elements.checkoutBtn().should("be.disabled");
    //for debug purposes this peace of code is left as comment 
    //checkoutPage.elements.firstName().type("test");
    //checkoutPage.elements.lastName().type("terst");
    //checkoutPage.elements.zipCode().type("1337");
    //checkoutPage.elements.continueBtn().click();
    //checkoutPage.elements.finishBtn().click();
    //checkoutPage.elements.checkoutTitle().should("have.text", "Checkout: Complete!")
    //checkoutPage.elements.goBackHomeBtn().click();
    //cy.url().should("include", "/inventory.html");
 
  })

})
