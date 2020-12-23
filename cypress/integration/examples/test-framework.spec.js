/// <reference types="Cypress" />

import HomePage from '../../pages/home-page'

describe('Handling test framework', () => {
    before(() => {
        cy.fixture('example.json').then((data) => {
            globalThis.data = data
        })
        globalThis.homePage = new HomePage()
    })

    it('Navigating to site and filling out basic information', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        globalThis.homePage.getNameTextField().type(globalThis.data.name)
        globalThis.homePage.getGenderSelector().select(globalThis.data.gender)
    })

    it('Validating two way binding works properly', () => {
        globalThis.homePage.getTwoWayBindTextField().then((item) => {
            const text = item.prop('value')
            expect(text).to.eql(globalThis.data.name)
        })
    })

    it('Validating minlength of Name text field is 2', () => {
        globalThis.homePage.getNameTextField().should('have.attr', 'minlength', '2')
    })

    it('Validating that radio button is disabled', () => {
        globalThis.homePage.getEntrepreneurRadioButton().should('be.disabled')
    })
})