describe('Analyzing network responses within browser', () => {
    it('Clicking the \'Get comment\' button on Cypress\' site', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept('GET', '**/comments/*').as('getComment')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@getComment').its('response.statusCode').should('eql', 200)
    })

    it('Clicking the \'Post comment\' button on Cypress\' site', () => {
        cy.intercept('POST', '**/comments').as('postComment')
        cy.get('.network-post.btn.btn-success').click()
        cy.wait('@postComment').then(($el) => {
            expect($el.response.body.email).to.eql('hello@cypress.io')
            expect($el.response.statusCode).to.eql(201)
        })
    })

    it('Mocking a response to test API edge cases', () => {
        cy.intercept({
            method: 'PUT',
            url: '**/comments/*',
          }, {
            statusCode: 404,
            body: { error: "Comment not found." },
            headers: { 'access-control-allow-origin': '*' },
            delayMs: 500,
          }).as('putComment')
        cy.get('.network-put.btn.btn-warning').click()
        cy.wait('@putComment')
        cy.get('.network-put-comment').should('contain', "Comment not found.")
    })
})