/// <reference types="cypress"/>

// context("Landing Page", () => {
//     beforeEach(() => {
//         cy.visit("http://localhost:3000");
//     });
// });

describe("landing page", () => {
    it("should hit the landing page", () => {
        cy.visit("http://localhost:3000");
        cy.get(".opt").should("exist");
        cy.wait(3000);
        cy.get(".continuetoscrutinypnl")
            .click()
            .then(() => {
                const state = localStorage.getItem("state");

                expect(state).to.equal("active");
            });
    });
});
