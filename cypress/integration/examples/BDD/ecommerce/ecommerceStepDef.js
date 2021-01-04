import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

let featureData;

Given('I land on the site', () => {
    cy.goToShop()
})

When('I place items in my cart', () => {
    globalThis.products.products.forEach(product => {
        cy.addProductToCart(product)
    })
})

And('Verify the total price', () => {
    globalThis.productPage.getCart().click()
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

Then('Select the country, submit my order and verify its success', () => {
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

Given('I land on the form page', () => {
    cy.goToForm()
})

When('I fill out the form details', (dataTable) => {
    featureData = dataTable.rawTable
    globalThis.homePage.getNameTextField().type(dataTable.rawTable[1][0])
    globalThis.homePage.getGenderSelector().select(dataTable.rawTable[1][1])
})

Then('Verify all information is correct', () => {
    globalThis.homePage.getTwoWayBindTextField().then((item) => {
        const text = item.prop('value')
        expect(text).to.eql(featureData[1][0])
    })
    globalThis.homePage.getNameTextField().should('have.attr', 'minlength', '2')
    globalThis.homePage.getEntrepreneurRadioButton().should('be.disabled')
})