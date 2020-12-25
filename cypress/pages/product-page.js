class ProductPage {
    getCart() {
        return cy.get('.nav-link.btn.btn-primary');
    }

    getShop() {
        return cy.get('ul.navbar-nav').eq(0).contains('Shop');
    }

    getProducts() {
        return cy.get('h4.card-title');
    }

    getAddCartBtn() {
        return cy.get('button.btn.btn-info');
    }

    getProductTitle() {
        return cy.get('h4.media-heading a');
    }

    getCheckout() {
        return cy.get('.btn.btn-success');
    }

    getCountryTF() {
        return cy.get('#country');
    }

    getTermsCheckbox() {
        return cy.get('#checkbox2');
    }

    getSuggestedOptions() {
        return cy.get('div.suggestions ul li');
    }

    getSuggestedOptionLinks() {
        return cy.get('div.suggestions ul li a');
    }

    getCompleteOrder() {
        return cy.get('.btn.btn-success.btn-lg');
    }

    getOrderResponse() {
        return cy.get('.alert.alert-success.alert-dismissible');
    }
}

export default ProductPage;