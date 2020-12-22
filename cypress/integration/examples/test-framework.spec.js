/// <reference types="Cypress" />

describe('Handling test framework', () => {
    before(() => {
        cy.fixture('example.json').then((data) => {
            globalThis.data = data
        })
    })

    it('Navigating to site and filling out basic information', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group:nth-child(1) .form-control').type(globalThis.data.name)
        cy.get('#exampleFormControlSelect1').select(globalThis.data.gender)
    })

    it('Validating two way binding works properly', () => {
        cy.get('.container').eq(1).find('h4 input').then((item) => {
            const text = item.prop('value')
            expect(text).to.eql(globalThis.data.name)
        })
    })

    it('Validating minlength of Name text field is 2', () => {
        cy.get('.form-group:nth-child(1) .form-control').should('have.attr', 'minlength', '2')
    })

    it('Validating that radio button is disabled', () => {
        cy.get('#inlineRadio3').should('be.disabled')
    })
})