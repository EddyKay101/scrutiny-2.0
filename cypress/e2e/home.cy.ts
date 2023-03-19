context("Home Page", () => {
    beforeEach(() => {
        localStorage.setItem("state", "active");
        // cy.visit("http://localhost:3000");
    });

    describe("home page", () => {
        it("should hit the home page when state is active", () => {
            cy.visit("http://localhost:3000");

            cy.get(".label h5:first")
                .invoke("text")
                .then((text) => {
                    expect(text.trim()).to.equal("RIGHT NOW");
                });
        });

        it("it should get the theme of the page at the moment", () => {
            cy.visit("http://localhost:3000");
            cy.get('[data-toggle="toggle"]')
                .click({ force: true })
                .then(() => {
                    expect(localStorage.getItem("theme")).to.equal("dark");
                });
        });

        it("it should maintain its theme when the page is reloaded", () => {
            cy.visit("http://localhost:3000");
            cy.get('[data-toggle="toggle"]')
                .click({ force: true })
                .then(() => {
                    cy.reload().then(() => {
                        expect(localStorage.getItem("theme")).to.equal("dark");
                    });
                });
        });
    });
});
