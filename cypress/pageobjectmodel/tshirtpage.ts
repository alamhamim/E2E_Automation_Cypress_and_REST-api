///<reference types="cypress" />
import { tshirtelements } from "../webelements/tshirtelements";
import { tshirtdata } from "../pagedata/tshirtpagedata";
import { cyhelper } from "../Helper/cyhelper";
export class tshirtpage{
    tshirtEle = new tshirtelements();

    clickOnTshirt(){
        cyhelper.clickByText(this.tshirtEle.elements.aTag, 'T-Shirts');
    }
    verifyTheTshirtTitle(){
        cy.title().should('contain', 'My Store');
    }
    verifyTShirtProduct(){
        cyhelper.verifyTheText(this.tshirtEle.elements.products, tshirtdata.products);
    }
}