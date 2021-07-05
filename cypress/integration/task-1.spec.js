/// <reference types="cypress" />
describe("To test login functionality", () => {
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
});

describe("To test search and filter functionalities", () => {
  it("should search successfully", () => {
    cy.visit("https://www.seleniumeasy.com/test/table-search-filter-demo.html");
    cy.get('input[id="task-table-filter"]').type("John Smith");
    cy.get("tr").should(
      "contain",
      "Wireframes",
      "John Smith",
      "in progress",
      "1"
    );
  });
  it("should filter results successfully", () => {
    cy.visit("https://www.seleniumeasy.com/test/table-search-filter-demo.html");
    cy.get(".filters").then(() => {
      cy.get('[placeholder="Username"]').should("be.disabled");
      cy.get('[placeholder="First Name"]').should("be.disabled");
      cy.get('[placeholder="Last Name"]').should("be.disabled");
    });
    cy.get(".btn-filter").click();
    cy.get(".filters").then(() => {
      cy.get('[placeholder="Username"]').should("be.enabled");
      cy.get('[placeholder="First Name"]').should("be.enabled");
      cy.get('[placeholder="Last Name"]').should("be.enabled");
    });
    cy.get('[placeholder="Username"]').type("markino");
    cy.get("tr").should("contain", "1", "markino", "Zieko", "Samuels");
  });
});
describe("To check checkboxes functionality", () => {
  it("should show success message after selecting the checkbox", () => {
    cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
    cy.get('input[id="isAgeSelected"]').click();
    cy.get('[id = "txtAge"]')
      .should("be.visible")
      .and("contain", "Success - Check box is checked");
  });

  it("should check all checkbxes", () => {
    cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
    cy.get('input[id="check1"]').click();
    cy.get(".checkbox").find(".cb1-element").should("be.checked");
  });
});
