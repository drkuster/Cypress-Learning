import ProductPage from "../../support/pages/product-page"

describe('Utilizing a custom command', () => {
    before(() => {
        Cypress.config('defaultCommandTimeout', 10000)
        cy.fixture('product-list').then((products) => {
            globalThis.products = products
        })
        globalThis.productPage = new ProductPage()
    })
    it('Custom command to select a product and add to cart', () => {
        cy.goToShop()
        globalThis.products.products.forEach(product => {
            cy.addProductToCart(product)
        })
        globalThis.productPage.getCart().click()
    })
    it('Verify cart is correct', () => {
        cy.verifyCart(globalThis.products.products)
        var totalPrice = 0
        globalThis.productPage.getProductPrices().each(($price) => {
            const trimmedPrice = parseInt($price.text().split(' ')[1].trim())
            cy.log(trimmedPrice)
            totalPrice = totalPrice + trimmedPrice
        })
        globalThis.productPage.getTotalPrice().then(($finalTotal) => {
            const bottomTotal = parseInt($finalTotal.text().split(' ')[1].trim())
            expect(bottomTotal).to.eql(totalPrice)
        })
    })
    it('Complete order', () => {
        globalThis.productPage.getCheckout().click()
        globalThis.productPage.getTermsCheckbox().check({force:true})
        globalThis.productPage.getCountryTF().type(globalThis.products.country)
        globalThis.productPage.getSuggestedOptions().each(($countrySuggestion, index) => {
            const countryName = $countrySuggestion.text()
            cy.log($countrySuggestion)
            if(countryName.includes(globalThis.products.country)) {
                globalThis.productPage.getSuggestedOptionLinks().eq(index).click()
            }
        })
        globalThis.productPage.getCompleteOrder().click({force:true})
        globalThis.productPage.getOrderResponse().then(($purchaseResponse) => {
            const responseText = $purchaseResponse.text()
            expect(responseText).to.include('Success')
        })
    })
})