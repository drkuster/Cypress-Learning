describe('Utilizing a custom command', () => {
    before(() => {
        cy.fixture('product-list').then((products) => {
            globalThis.products = products
        })
    })
    it('Custom command to select a product and add to cart', () => {
        cy.goToShop()
        globalThis.products.products.forEach(product => {
            cy.addProductToCart(product)
        });
        cy.get('.nav-link.btn.btn-primary').click()
        cy.verifyCart(globalThis.products.products)
    })
})