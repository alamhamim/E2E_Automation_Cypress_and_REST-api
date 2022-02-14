///<reference types="cypress" />
import { womenpageelements } from "../webelements/womenpageelements";
import { cyhelper } from "../Helper/cyhelper";
import { womenpagedata } from "../pagedata/womenpagedata";
export class womenpage{
    womenEle = new womenpageelements();
    clickOnWomen(){
        cyhelper.clickByText(this.womenEle.elements.aTag, 'Women');
    }
    verifyWomenPageTitle(){
        cy.title().should('contain', 'Women');
    }
    womenLogoVisible(){
        cy.get(this.womenEle.elements.womenLogo).should('be.visible');
    }
    verifyWomenpageProducts(){
        cyhelper.verifyTheText(this.womenEle.elements.womenPageProducts, womenpagedata.womenpageProducts);
    }
}