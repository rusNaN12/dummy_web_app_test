class inventory{

    elements ={
        sortDropDown : () => cy.get('[data-test="product_sort_container"]'),
        sauceLabsBoltTShirtname : () => cy.get('#item_1_title_link > .inventory_item_name'),
        sauceLabsBoltTShirtBtn : () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        sauceLabsBoltTShirtPrice : () => cy.get(':nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price'),
        cartBtn : () => cy.get('.shopping_cart_link'),
    }
}

module.exports = new inventory();
