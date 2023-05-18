class inventoryPage{

    elements ={
        sortDropDown : () => cy.get('[data-test="product_sort_container"]'),
        sauceLabsBoltTShirtName : () => cy.get('#item_1_title_link > .inventory_item_name'),
        sauceLabsBoltTShirtBtn : () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        sauceLabsBoltTShirtPrice : () => cy.get(':nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price'),
        elementNotFoundAddToCartBtn : () => cy.get('[data-test="add-to-cart-item-not-found"]'),
        cartBtn : () => cy.get('.shopping_cart_link'),
    }
}

module.exports = new inventoryPage();
