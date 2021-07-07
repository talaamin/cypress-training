/// <reference types="cypress" />
import users from "../fixtures/users.json";
describe("To test login functionality", () => {
  it("should login successfully", () => {
    cy.request("https://www.saucedemo.com");
    cy.visit("https://www.saucedemo.com");
    cy.get('input[id="user-name"]').type(users.username1);
    cy.get('input[id="password"]').type(users.password);
    cy.get('button[id="login-button"]').click();
  });
});

describe("To test upload functionality", () => {
  it("should upload a file successfully", () => {
    cy.visit("https://demoqa.com/upload-download");
    cy.get('input[id="uploadFile"]').attachFile("46543.jpg");
  });
});

describe("To test to do list", () => {
  it("should add items to the to do list and complete them successfully", () => {
    cy.visit("https://todomvc.com/examples/angularjs/#/");
    cy.get(".new-todo").type("task 1{enter}").type("task 2{enter}");
    cy.contains(".todo-list", "task 1", "task 2").should("be.visible");
    cy.get(".todo-count").find(".ng-binding").should("contain", "2");
    cy.contains("li", "task 1").find(".toggle").click();
    cy.contains("a", "Completed").click();
    cy.get(".todo-list label")
      .should("have.length", 1)
      .eq(0)
      .should("have.text", "task 1");
  });
});
