describe("Home", () => {
  beforeEach(() => {
    cy.visit("../../../src/index.html");
    cy.title().should("eq", "Single Page Application");
    cy.loginAs("admin");
  });

  it("User can see welcome text", () => {
    cy.getBySel("content").should("be.visible");
  });
  it("User can see navigation menu list", () => {
    cy.getBySel("navigation").should("be.visible");
    cy.getBySel("home").should("be.visible");
    cy.getBySel("products").should("be.visible");
    cy.getBySel("contact").should("be.visible");
  });
  it("User can see user menu", () => {
    cy.getBySel("userMenu").should("be.visible");
  });
  it("User can logout and redirected to the landing page", () => {
    cy.getBySel("userMenu").click();
    cy.getBySel("logout").click();
    cy.getBySel("navigation").should("not.be.visible");
    cy.getBySel("landingHeader").should("be.visible");
  });
});
