describe('Attempting to order broccoli from Rahul Shetty site', () => {
    it('Navigating to the page', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('Searching for broccoli with letter b', () => {
        cy.get('input.search-keyword').type('b')
        cy.wait(2000)
    })
    it('Searching for broccoli from results, adding to cart', () => {
        cy.get('.products').find('.product').each(($el) => {
            const productName = $el.find('h4.product-name').text()
            if(productName.includes('Brocolli')) {
                $el.find('.product-action button').click()
            }
        })
    })
    it('Checking out', () => {
        cy.get('a.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(1000)
        cy.contains('Place Order').click()
        cy.get('select').select('United States')
        cy.get('.chkAgree').click()
        cy.contains('Proceed').click()
    })
})