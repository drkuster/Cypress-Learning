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

import ProductPage from "../pages/product-page"

Cypress.Commands.add("goToShop", () => {
    const productPage = new ProductPage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    productPage.getShop().click()
})

Cypress.Commands.add("addProductToCart", (productName) => {
    productPage.getProducts().each(($el, index) => {
        const productTitle = $el.text()
        if(productTitle.includes(productName)) {
            productPage.getAddCartBtn().eq(index).click()
        }
    })
})

Cypress.Commands.add("verifyCart", (products) => {
    productPage.getProductTitle().each(($product, index) => {
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
