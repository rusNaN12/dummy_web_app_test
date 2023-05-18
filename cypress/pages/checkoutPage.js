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
        finishBtn : () => cy.get('[data-test="finish"]'),
        cancelBtn : () => cy.get('[data-test="cancel"]'),
        goBackHomeBtn : () => cy.get('[data-test="back-to-products"]'),
        checkoutTitle : () => cy.get('.title'),
       
        itemTotal : () => cy.get('.summary_subtotal_label'),
        tax : () => cy.get('.summary_tax_label'),
        total : () => cy.get('.summary_total_label'),
        
    }
}

module.exports = new checkoutPage();
