/// <reference types="cypress" />

const ADMIN_PASSWORD = "2020";

Cypress.Commands.add("getBySel", (selector: string, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
Cypress.Commands.add("login", (email: string, password: string) => {
  cy.getBySel("email").type(email);
  cy.getBySel("password").type(password);
  cy.getBySel("login").click();
  cy.getBySel("landingHeader").should("not.be.visible");
  cy.getBySel("navigation").should("be.visible");
});
Cypress.Commands.add("loginAs", (userRole: string) => {
  switch (userRole) {
    case "admin":
      cy.login(Cypress.env("adminUsername"), Cypress.env("adminPassword"));
      break;
    case "user1":
      cy.login(Cypress.env("user1Username"), Cypress.env("user1Password"));
      break;
    case "user2":
      cy.login(Cypress.env("user2Username"), Cypress.env("user2Password"));
      break;
  }
});
