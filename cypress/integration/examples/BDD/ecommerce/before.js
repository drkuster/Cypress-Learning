import ProductPage from "../../../../support/pages/product-page"
import HomePage from "../../../../support/pages/home-page"

before(() => {
    Cypress.config('defaultCommandTimeout', 10000)
    cy.fixture('product-list').then((products) => {
        globalThis.products = products
    })
    cy.fixture('example.json').then((data) => {
        globalThis.data = data
    })
    globalThis.productPage = new ProductPage()
    globalThis.homePage = new HomePage()
})