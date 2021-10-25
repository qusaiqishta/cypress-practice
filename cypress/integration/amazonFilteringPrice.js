

// describe('Test Filtering Process at amazon',()=>{
//     before(()=>{
//         cy.visit('https://www.amazon.com/')
//     })
//     afterEach(()=>{
//         cy.visit('https://www.amazon.com/')
//     })


//     it('should all rendering products have price less than 25 dollars',()=>{
//         cy.get('#twotabsearchtextbox').type('clock')
//         cy.get('#nav-search-submit-button').click()
//         cy.contains('Under $25').click()
//         cy.get('.s-main-slot div.sg-col-4-of-12 span.a-price-whole').each((ele,index)=>{
//            expect(Number(ele.text())).to.be.lt(25)
//         })
//     })

//     it('should all rendering products have price between 25 and 50 dollars',()=>{
//         cy.get('#twotabsearchtextbox').type('clock')
//         cy.get('#nav-search-submit-button').click()
//         cy.contains('$25 to $50').click()
//         cy.get('.a-size-base.a-link-normal').not(":has(span.a-text-price)").within(()=>{
//             cy.get('span.a-price-whole').each(ele=>{
//                 expect(Number(ele.text())).to.be.gte(25)
//                 expect(Number(ele.text())).to.be.lte(50)
//             })
//         })
//     })
// })


describe('Test Filtering Process At Booking.com',()=>{
    before(()=>{
        cy.visit('https://www.booking.com/')
    })

    it('Test1',()=>{
        cy.contains('Dead Sea Jordan').click({force: true});
        // cy.get('#ss').should('have.attr','value').then(val=>{
        //     expect(val).to.equal('Dead Sea Jordan')
        // });
        cy.wait(2000)
        cy.get('.sb-date-field__display[data-placeholder="Check-in Date" ]').click();
        cy.get('table.bui-calendar__dates td[data-date="2021-11-07"]').click();
        cy.get('.sb-date-field__display[data-placeholder="Check-out Date" ]').click();
        cy.get('table.bui-calendar__dates td[data-date="2021-11-08"]').click();
        cy.get('button[data-sb-id="main"][type="submit"]').click();
        cy.get('#__bui-3').check();
        cy.get('.fde444d7ef._e885fdc12').each(ele=>{
            expect(Number(ele.text().replace(/\D/g, ''))).to.be.gte(41)
            expect(Number(ele.text().replace(/\D/g, ''))).to.be.lte(82)
        

        })

    })
})