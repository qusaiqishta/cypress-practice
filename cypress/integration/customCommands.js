describe('Custom Command',function(){
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com')

    })
    
    it('login test',function(){
        cy.typeLogin('standard_user','secret_sauce')
        cy.log('______first test________')
    })
})



