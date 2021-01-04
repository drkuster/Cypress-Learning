describe('Testing an endpoint without front end UI', () => {
    it('Testing a basic request to HTTPBIN', () => {
        cy.request('GET', 'http://httpbin.org/get?hello=world').then(($response) => {
            expect($response.body.args).to.have.property("hello", "world")
        })
    })
})