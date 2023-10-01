/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getBySel(selector: string, args?: any): Chainable<JQuery<HTMLElement>>;
    login(email: string, password: string): void;
    loginAs(userRole: string): void;
  }
}
