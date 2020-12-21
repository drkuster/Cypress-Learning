/// <reference types="Cypress" />
describe('Handling pop-ups', () => {
    it('Cypress will auto accept an alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
    })
    it('But we may want to validate text within a pop-up', () => {
        cy.get('#alertbtn').click()
        cy.get('[value=Confirm]').click()
        cy.on('window:alert', ($str) => {
            expect($str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', ($str) => {
            expect($str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
    it('Handling a child tab in Cypress', () => {
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('not.include', 'AutomationPractice')
    })
    it('Going back..', () => {
        cy.go('back')
        cy.url().should('include', 'AutomationPractice')
    })
    it('Grabbing text from a web table', () => {
        cy.get('table[name=courses]').find('tr td:nth-child(2)').each(($el) => {
            const text = $el.text()
            if(text.includes('Python')) {
                expect($el.next().text()).to.equal('25')
            }
        })
    })
    it('Handling a mouse hover event', () => {
        cy.get('.mouse-hover-content').invoke('show')
        // cy.contains('Top').click({force: true}) optionally force the hidden element
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })
})