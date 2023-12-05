/// <reference types="cypress" />

describe('finalizar compra', () => {
    it('comprar luz de bicicleta', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
        cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('#shopping_cart_container').click();
        cy.get('button[name="checkout"]').click();
        cy.get('input[name="firstName"]').type("Gabriel");
        cy.get('input[name="lastName"]').type("Simonetto");
        cy.get('input[name="postalCode"]').type("008534580");
        cy.get('input[name="continue"]').click();
        cy.get('#item_0_title_link').should('exist');
        cy.get('button[name="finish"]').click();
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });

});