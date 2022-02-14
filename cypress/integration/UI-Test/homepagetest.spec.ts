///<reference types="cypress" />
import { homepage } from "../../pageobjectmodel/homepage";
beforeEach(() => {
    cy.visit('/');
})

describe('Home page test', () => {
    const home = new homepage();
    it('Verify the home page header text', () => {
        home.verifyHeader();
    });
    it('Click on women and verify the title', () => {
        home.clickOnWomen();
    });
    it('Click on dresses and verify the title', () => {
        home.clickOneDresses();
    });
    it('Click on t-shirts and verify the title', () => {
        home.clickOnTshirts();
    });
    it('Verify the home page products', () => {
        home.verifyHomePageProduct();
    });
});