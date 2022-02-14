///<reference types="cypress" />
export class cyhelper{
   static clickByText(elements: string, givenText: string){
        cy.get(elements).each((ele) =>{
            cy.wrap(ele).invoke('text').then((actualText) =>{
                if (actualText == givenText) {
                    cy.wrap(ele).click();
                }
            })
        })
    }
   static verifyTheText(elements: string, expectedText){
        cy.get(elements).each((ele, index) =>{
            cy.wrap(ele).should('contain.text', expectedText[index]);
        })
    }
}