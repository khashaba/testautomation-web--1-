describe("Login", () => {
  const ADMIN_USERNAME = Cypress.env("adminUsername");
  const ADMIN_PASSWORD = "2020";

  beforeEach(() => {
    cy.visit("../../../src/index.html");
    cy.title().should("eq", "Single Page Application");
  });

  it("User can not login without username or password", () => {
    cy.getBySel("login").click();
    cy.getBySel("landingHeader").should("be.visible");
    // BUG|Enhancement - Should display error message "Please enter your username and password"
    // BUG|Enhancement  - Should display the required element"
  });
  it("User can not login without typing a password", () => {
    cy.getBySel("email").type(ADMIN_USERNAME);
    cy.getBySel("login").click();
    cy.getBySel("landingHeader").should("be.visible");
    // BUG|Enhancement - Should display error message "Please enter your password"
    // BUG|Enhancement - Should display the required element"
  });
  it("User can not login with a wrong password", () => {
    cy.getBySel("email").type(ADMIN_USERNAME);
    cy.getBySel("password").type("wrongPassword");
    cy.getBySel("login").click();
    cy.getBySel("landingHeader").should("be.visible");
    // BUG|Enhancement - Should display error message "Wrong password. Please try again"
    // BUG|Enhancement - Should display the required element"
  });
  it("User can not login with wrong email and correct password", () => {
    cy.getBySel("password").type(ADMIN_PASSWORD);
    cy.getBySel("login").click();
    cy.getBySel("landingHeader").should("be.visible");
    // BUG|Enhancement - Should display error message "User Email is required"
    // BUG|Enhancement - Should display the required element"
  });
  it.skip("User can not use wrong email format", () => {
    cy.getBySel("email").type("wrong@format");
    cy.getBySel("password").type(ADMIN_PASSWORD);
    cy.getBySel("login").click();
    cy.getBySel("landingHeader").should("be.visible");
    cy.getBySel("errorMessage").should("have.text", "Wrong email format");
    // BUG - Should display error message "Email should be valid"
  });

  it("User can login as an admin", () => {
    cy.loginAs("admin");
  });
});
