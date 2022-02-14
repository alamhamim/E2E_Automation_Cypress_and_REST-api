///<reference types="cypress" />
import { tshirtpage } from "../../pageobjectmodel/tshirtpage";
before(() => {
    cy.visit('/');
});
describe('T-shirt page test', () => {
    const tshirt = new tshirtpage();
    it('click on the t-shirt', () => {
      tshirt.clickOnTshirt();  
    });
    it('verify the t-shirt page title', () => {
        tshirt.verifyTheTshirtTitle();
    });
    it('verify t-shirt page products', () => {
        tshirt.verifyTShirtProduct();
    });
});