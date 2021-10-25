
/// <reference types="cypress"/> 


describe('Verifying Product In Amazon',()=>{
    it('should succefully search for an item and add it to the cart',()=>{
        cy.visit('/');
        cy.get('#twotabsearchtextbox').type('apple mac booker 13 inch 2021');
        cy.get('#nav-search-submit-button').click();
        cy.get('[alt="Apple MacBook Air 13.3in LED Laptop Intel i5-5250U Dual Core 1.6GHz 4GB 128GB SSD Early 2015 - MJVE2LL/A (Renewed)"]').first().click();
        cy.get('#add-to-cart-button').click();

        cy.get('#attach-sidesheet-view-cart-button > span > input').click();
        cy.title().should('eq','Amazon.com Shopping Cart');
        cy.get('.a-truncate-cut').invoke('text').then(ele=>{
            expect(ele).to.include('Apple MacBook Air 13.3in LED Laptop Intel i5-5250U Dual Core 1.6GHz 4GB 128GB SSD');
        });
    });
});

