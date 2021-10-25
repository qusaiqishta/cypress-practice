beforeEach(()=>{
    cy.visit('https://www.amazon.com/')
})

it('should have the searched item word be included in the url', () => {
    cy.get('#twotabsearchtextbox').type('watch');
    cy.get('#nav-search-submit-button').click();
    cy.url().should('include', 'watch');
});

it('should text assertion', () => {
    cy.get('#nav-hamburger-menu > span').click();
    cy.get('a[href="/finds?ref_=nav_em_allpf_foundit_d_0_1_1_30"]').click()
    cy.get('.foundit-nav-refresh title').should('include.text', '#FoundItOnAmazon.');
});
