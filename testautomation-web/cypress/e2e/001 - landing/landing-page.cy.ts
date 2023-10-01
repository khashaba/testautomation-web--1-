describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("../../../../src/index.html");
    cy.title().should("eq", "Single Page Application");
  });

  it("User can see the header", () => {
    cy.getBySel("landingHeader").should("be.visible");
  });

  it("User can see 'Thank you' footer", () => {
    cy.getBySel("landingFooter").should(
      "have.text",
      "Thank you for participating!"
    );
  });
  it("User can see login form", () => {
    cy.getBySel("loginForm").should("be.visible");
    cy.getBySel("loginForm").contains("User");
    cy.getBySel("loginForm").contains("Password");
  });
});
