
let postHours = [];

describe('Check Links And Ascending Order For Posts Hours', () => {
    before(() => {
        cy.visit('https://www.forbes.com/')
        cy.contains('Editors’ Picks').click()
        cy.get('.editors-picks div.data-viz__timestamp').each(hour => {

            if (hour.text().includes('hour')) {

                postHours.push(`{"hour":${hour.text().replace(/\D/g, '')},"minutes":${0}}`)

            }
            else if (hour.text().includes('minutes')) {
                postHours.push(`{"hour":${0},"minutes":${hour.text().replace(/\D/g, '')}}`)
            }
        })
    })
    it('should status code for get response be 200', () => {
        cy.get('.editors-picks a.data-viz__title').each((article) => {
            let articleLink = article.attr('href')
            console.log(articleLink)
            cy.request('GET', articleLink).then(res => {
                expect(res.status).to.equal(200)
            })
        })


    })

    it('should posts hours be arranged in ascending orders', () => {
        console.log(postHours)
        for (let i = 0; i < postHours.length - 1; i++) {
            expect(JSON.parse(postHours[i]).hour).to.be.lte(JSON.parse(postHours[i + 1]).hour)
        }
    })
})

