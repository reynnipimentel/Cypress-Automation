class BasicFuntions{
    async clickElement(testObject){
        await cy.get(testObject).click()
    }

    async hoverElement(testObject1, testObject2){
        await cy.get(testObject1).trigger('mouseover')
        await cy.get(testObject2).should('be.visible')
    }

     checkElementNotExist(testObject){
        return new Cypress.Promise((resolve) => {
            cy.get('body').then(($body) => {
              const elementExists = $body.find(testObject).length > 0;
              resolve(elementExists);
            });
          });
    }

    typeValue(testObject, value){
        cy.get(testObject).clear().type(value)
    }


}

module.exports= BasicFuntions;