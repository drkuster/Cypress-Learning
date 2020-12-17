/// <reference types="Cypress" />

describe('Basic testing', () => {
    it('Entering ca into search box', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
    });
    it('Verifying there are 4 results', () => {
        cy.get('.products').find('.product').should('have.length', 4)
    })
    it('Adding cashews to cart...', () => {
        cy.get('.products')
            .find('.product')
            .each(($el, index, $list) => {
                const itemText = $el.find('h4.product-name').text()
                if(itemText.includes('Cashews')) {
                    $el.find('button').click()
                }
            })
        cy.get('.brand').should('have.text', 'GREENKART')
    })
    it('Proceeding to checkout', () => {
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(1000)
    })
    it('Placing order', () => {
        cy.contains('Place Order').click()
        cy.get('select').select('United States')
        cy.get('input.chkAgree').click()
        cy.contains('Proceed').click()
    })
})