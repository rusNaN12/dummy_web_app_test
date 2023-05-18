class checkoutPage{

    elements ={
        checkoutBtn : () => cy.get('[data-test="checkout"]'),
        continueShopingBtn : () => cy.get('[data-test="continue-shopping"]'),
        removeSauceLabsBoltTShirtBtn : () => cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]'),
        sauceLabsBoltTShirtName :  () => cy.get('.inventory_item_name'),
        firstName : () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        zipCode: () => cy.get('[data-test="postalCode"]'),
        continueBtn : () => cy.get('[data-test="continue"]'),
        cancelBtn : () => cy.get('[data-test="cancel"]'),
        
    }
}

module.exports = new checkoutPage();
