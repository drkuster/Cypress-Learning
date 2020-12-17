/// <reference types="Cypress" />

describe('Exploring select drop-downs, check boxes and more', () => {
    it('Navigating to site', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it('Testing check boxes', () => {
        cy.get('#checkBoxOption1')
            .click()
            .should('be.checked')
            .and('have.value', 'option1')
        cy.get('#checkBoxOption1')
            .uncheck()
            .should('not.be.checked')
        cy.get('input[type=checkbox]')
            .check(['option2', 'option3'])
            .should('be.checked')
    })
    it('Testing static select dropdown', () => {
        cy.get('select#dropdown-class-example')
            .select('Option2')
            .should('have.value', 'option2')
    })
    it('Testing dynamic select dropdowns', () => {
        cy.get('#autocomplete')
            .type('ind')
        cy.get('.ui-menu-item')
            .each(($el) => {
                const optionName = $el.find('.ui-menu-item-wrapper').text()
                if(optionName === 'India') {
                    $el.click()
                }
            })
        cy.get('#autocomplete')
            .should('have.value', 'India')
    })
    it('Testing visibility of textbox', () => {
        // textbox is initially visible
        cy.get('#displayed-text')
            .should('be.visible')

        // after clicking hide textbox button, should be invisible
        cy.get('#hide-textbox')
            .click()
        cy.get('#displayed-text')
            .should('not.be.visible')

        // after clicking show textbox button, should be visible
        cy.get('#show-textbox')
            .click()
        cy.get('#displayed-text')
            .should('be.visible')
    })
    it('Testing radio button functionality', () => {
        cy.get('input[value=radio2]')
            .click()
            .should('be.checked')
        cy.get('input[value=radio1]')
            .should('not.be.checked')
        cy.get('input[value=radio3]')
            .should('not.be.checked')
    })
})