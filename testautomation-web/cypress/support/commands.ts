/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
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
