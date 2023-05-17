class checkout{

    elements ={
        checkoutBtn : () => cy.get('[data-test="checkout"]'),
    }
}

module.exports = new checkout();
