/// <reference types="cypress" />

const productData = [
    { name: 'Sauce Labs Backpack', price: '$29.99' },
    { name: 'Sauce Labs Bike Light', price: '$9.99' },
    { name: 'Sauce Labs Bolt T-Shirt', price: '$15.99' },
    { name: 'Sauce Labs Fleece Jacket', price: '$49.99' },
    { name: 'Sauce Labs Onesie', price: '$7.99' },
    { name: 'Test.allTheThings() T-Shirt (Red)', price: '$15.99' },
];

//tags dos links dos produtos no carrinho

const productIds = [
    'item_0_title_link',
    'item_5_title_link',
    'item_1_title_link',
    'item_2_title_link',
    'item_3_title_link',
    'item_4_title_link'
  ];



describe('adicionar produtos', () => {
    it('adiciona os itens no carrinho', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('#shopping_cart_container').click();
        cy.get(".cart_item").should('exist');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    });

    it('confere o numero de produtos adicionados', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
        cy.get('.btn_inventory').each(($button) => {
            $button.click();
        });
        cy.get('#shopping_cart_container').click(); 
        productIds.forEach((productId, index) => {
            const expectedLink = productIds[index];
            cy.get("#" + expectedLink).should('exist');
          });
    });
});