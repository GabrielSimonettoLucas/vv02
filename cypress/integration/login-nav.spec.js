/// <reference types="cypress" />

describe('Valida o login e a navegação inicial', () => {
    it('realizar login', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
        cy.url().should('include', '/inventory.html');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

    it('navegação menu', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();  
        cy.get('#shopping_cart_container').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#inventory_sidebar_link').click();
        cy.url().should('include', '/inventory.html');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('include', 'https://www.saucedemo.com');
    });
  });