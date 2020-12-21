/// <reference types="Cypress" />

describe('How do you handle a child window in Cypress?', () => {
    it('Grab the href attribute and visit the URL?', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(($el) => {
            const url = $el.prop('href')
            cy.log(url)
            // cy.visit(url) not a reliable method!
        })
        cy.get('#opentab').invoke('removeAttr', 'target').click() // more reliable
    })
})