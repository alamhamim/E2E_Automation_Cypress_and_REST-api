///<reference types="cypress" />
import { womenpage } from "../../pageobjectmodel/womenpage";
before(() => {
    cy.visit('/');
});
describe('Women page test', () => {
    const women = new womenpage();
    it('Click on women and verify the title', () => {
        women.clickOnWomen();
    });
    it('Verify women page title', () => {
        women.verifyWomenPageTitle();
    });
    it('Verify women page logo', () => {
        women.womenLogoVisible();
    });
    it('Verify women page products', () => {
        women.verifyWomenpageProducts();
    });
});