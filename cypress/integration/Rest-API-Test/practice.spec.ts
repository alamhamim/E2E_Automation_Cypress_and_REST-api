/// <reference types="cypress" />
describe('Hello world', () => {
    it('Test one', () => {
        console.log('Hello world')
    });
    it('Test two', () => {
        cy.log('This is test two')
    });
    it('Test three', () => {
        cy.log('This is test three')
    });
});