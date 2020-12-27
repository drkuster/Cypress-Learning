class HomePage {
    getNameTextField() {
        return cy.get('.form-group:nth-child(1) .form-control');
    }

    getGenderSelector() {
        return cy.get('#exampleFormControlSelect1');
    }

    getTwoWayBindTextField() {
        return cy.get('.container').eq(1).find('h4 input');
    }

    getEntrepreneurRadioButton() {
        return cy.get('#inlineRadio3');
    }
}

export default HomePage;