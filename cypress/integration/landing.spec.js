/// <reference types="cypress"/>

context("Landing Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    });

    it("should find landing page and logo", async () => {
        await cy.get('.main-content__image-and-options').should('exist');
    });
});