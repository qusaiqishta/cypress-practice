
// describe('Test Multible Links In Wikipedia', () => {


    // it('Should redirect to english translated page',()=>{
    //     cy.request('GET','https://en.wikipedia.org/wiki/Main_Page')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     }).its('body').should('include','lang=en')

    // })
    // it('Should redirect to russian translated page',()=>{
    //     cy.request('GET','https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })
    // it('Should redirect to espanol translated page',()=>{
    //     cy.request('GET','https://es.wikipedia.org/wiki/Wikipedia:Portada')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })
    // it('Should redirect to chainees translated page',()=>{
    //     cy.request('GET','https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })
    // it('Should redirect to korean translated page',()=>{
    //     cy.request('GET','https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })
    // it('Should redirect to portugues translated page',()=>{
    //     cy.request('GET','https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })
    // it('Should redirect to japanees translated page',()=>{
    //     cy.request('GET','https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })
    // it('Should redirect to deutsch translated page',()=>{
    //     cy.request('GET','https://de.wikipedia.org/wiki/Wikipedia:Hauptseite')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })
    // it('Should redirect to franch translated page',()=>{
    //     cy.request('GET','https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })
    // it('Should redirect to italiano translated page',()=>{
    //     cy.request('GET','https://it.wikipedia.org/wiki/Pagina_principale')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })
    // it('Should redirect to polski translated page',()=>{
    //     cy.request('GET','https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna')
    //     .should(response=>{
    //         expect(response.status).to.equal(200)
    //     })

    // })

//     it('should links direct to right pages', () => {
//         cy.visit('https://www.wikipedia.org/')
//         cy.get('.central-featured a').each(link => {
//             cy.request('GET', `${'https:' + link.attr('href')}`)
//                 .then(res => {
//                     expect(res.status).to.equal(200)
//                 })
//         })

//     })
// })

// describe('Verifying Page Title',()=>{
//     it('should title be Lorem Ipsum',()=>{
//         cy.request('GET','https://www.lipsum.com/')
//                 .its('body').should('include','<h1>Lorem Ipsum</h1>')

//     });
// });

describe('Verifying Number Of Pages ',()=>{
    it('Should be more than 50',()=>{
        cy.request('GET','https://gorest.co.in/public/v1/users')
        .then(res=>{
            // console.log(res.body.meta.pagination['pages'])
            
            expect(res.body.meta.pagination['pages']).to.be.gt(50)
    
});
});
});