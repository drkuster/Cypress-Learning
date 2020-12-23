// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

Cypress.Commands.add("goToShop", () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('ul.navbar-nav').eq(0).contains('Shop').click()
})

Cypress.Commands.add("addProductToCart", (productName) => {
    cy.get('h4.card-title').each(($el, index) => {
        const productTitle = $el.text()
        if(productTitle.includes(productName)) {
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

Cypress.Commands.add("verifyCart", (products) => {
    cy.get('h4.media-heading a').each(($product, index) => {
        const productTitle = $product.text()
        expect(productTitle).to.eql(products[index])
    })
})

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
