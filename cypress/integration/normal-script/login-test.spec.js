/// <reference types="cypress" />

// const {each} = require("cypress/types/bluebird");

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Success Login", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("contains", "/inventory.html");
  });
});
