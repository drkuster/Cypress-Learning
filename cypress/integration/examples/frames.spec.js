/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Handling frames in Cypress can be a bit tricky', () => {
    it('Here is how we might handle an iFrame', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('Mentorship').click()
        cy.iframe().find('.pricing-title').should('have.length', '2')
    })
})