import loginPage from "../pages/loginPage"

describe('Login page testing', () => {
  beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
  it('success login', () => {
    const username = Cypress.env('normal');
    const password = Cypress.env('password');
    cy.visit('/');
    loginPage.login(username, password);
    cy.url().should('contain', Cypress.config('baseUrl') + '/inventory.html');

  })

  it('login with wrong username and password', () => {
    const username = 'test';
    const password = 'test';
    cy.visit('/');
    loginPage.login(username, password);
    cy.url().should('contain', Cypress.config('baseUrl'));
    loginPage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');

  })

it('login with wrong passwword correct user', () => {
    const username = Cypress.env('normal');
    const password = 'test';
    cy.visit('/');
    loginPage.login(username, password);
    cy.url().should('contain', Cypress.config('baseUrl'));
    loginPage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');

  })

it('login with blocked user', () => {
    const username = Cypress.env('locked');
    const password = Cypress.env('password');
    cy.visit('/');
    loginPage.login(username, password);
    cy.url().should('contain', Cypress.config('baseUrl'));
    loginPage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  })


})
