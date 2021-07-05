/// <reference types="cypress" />

it("should login successfully", () => {
  cy.visit("https://the-internet.herokuapp.com/login");
  cy.get('input[id="username"]').type("tomsmith");
  cy.get('input[id="password"]').type("SuperSecretPassword!");
  cy.get(".fa-sign-in").click();
  cy.get('[id="flash"]')
    .should("be.visible")
    .and("contain", "You logged into a secure area!")
    .and("have.css", "color", "rgb(255, 255, 255)");
});

it("should logout successfully", () => {
  cy.get(".icon-signout").click();
  cy.get('[id="flash"]')
    .should("be.visible")
    .and("contain", "You logged out of the secure area!")
    .and("have.css", "color", "rgb(255, 255, 255)");
});

it("should show error messages for invalid credentials", () => {
  cy.visit("https://the-internet.herokuapp.com/login");
  cy.get('input[id="username"]').type("tomsmith1");
  cy.get('input[id="password"]').type("SuperSecretPassword!1");
  cy.get(".fa-sign-in").click();
  cy.get('[id="flash"]')
    .should("be.visible")
    .and("contain", "Your username is invalid!");
});
