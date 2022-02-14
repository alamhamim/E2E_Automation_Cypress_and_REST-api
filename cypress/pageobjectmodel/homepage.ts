///<reference types="cypress" />
import { homepagelements } from "../webelements/homepageelement";
import { homepagedata } from "../pagedata/homepagedata";
import { cyhelper } from "../Helper/cyhelper";
export class homepage{
    homeEle = new homepagelements();
    homedata = new homepagedata();
    verifyHeader(){
       cyhelper.verifyTheText(this.homeEle.elements.header, this.homedata.headerData)
    }
    clickOnWomen(){
        cyhelper.clickByText(this.homeEle.elements.header, 'Women');
        cy.title().should('contain', 'Women');
    }
    clickOneDresses(){
        cyhelper.clickByText(this.homeEle.elements.header, 'Dresses');
        cy.title().should('contain', 'Dresses');
    }
    clickOnTshirts(){
        cyhelper.clickByText(this.homeEle.elements.header, 'T-shirts');
        cy.title().should('contain', 'T-shirts');
    }
    verifyHomePageProduct(){
        cyhelper.verifyTheText(this.homeEle.elements.products, this.homedata.products);
    }
}