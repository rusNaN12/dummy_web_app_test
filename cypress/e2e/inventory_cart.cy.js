import loginPage from "../pages/loginPage"
import inventoryPage from "../pages/inventoryPage"
import checkoutPage from "../pages/checkoutPage"

describe("Inventory and cart page testing scenarios", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    const username = Cypress.env("normal");
    const password = Cypress.env("password");
    cy.visit("/");
    loginPage.login(username, password);
  });

  it("Check user is able to add a element to cart from inventory-item page", () => {
    inventoryPage.elements.sauceLabsBoltTShirtName().click();
    inventoryPage.elements.sauceLabsBoltTShirtBtn().click();
    inventoryPage.elements.cartBtn().click();
    checkoutPage.elements.sauceLabsBoltTShirtName().should("have.text", "Sauce Labs Bolt T-Shirt");
  });

  it("Check user is able to add a element to cart from inventory page", () => {
    inventoryPage.elements.sauceLabsBoltTShirtBtn().click();
    inventoryPage.elements.cartBtn().click();
    checkoutPage.elements.sauceLabsBoltTShirtName().should("have.text", "Sauce Labs Bolt T-Shirt");
  })

  it("Check  user has no add cart functionality for non existing items ", () => {
    //this test is suppose to faile due to a bug and next test will leverege this bug
    inventoryPage.elements.sauceLabsBoltTShirtName().click();
    //here we are forced to use failonstatus code in order to test behavior
    cy.visit("/inventory-item.html?id=test", { failOnStatusCode: false });
    inventoryPage.elements.elementNotFoundAddToCartBtn().should("not.exist");
  })

  it("Check user is not able to add an  non existing element to cart ", () => {
    //this test is suppose to faile as application will crash
    inventoryPage.elements.sauceLabsBoltTShirtName().click();
    //here we are forced to use failonstatus code in order to test behavior
    cy.visit("/inventory-item.html?id=test", { failOnStatusCode: false });
    inventoryPage.elements.elementNotFoundAddToCartBtn().click();
    //bellow line of code willl simulate application crash in case non existing itme can no longer be added to cart
    //window.localStorage.setItem('cart-contents', 'null'); 
    inventoryPage.elements.cartBtn().click();
  })

})
