/// <reference types="cypress" />

it("should submit the form successfully", () => {
  cy.visit("https://www.seleniumeasy.com/test/input-form-demo.html");
  cy.contains("Input form with validations").should("be.visible");
  cy.get('[name="first_name"]').type("Tala");
  cy.get('[name="last_name"]').type("Qawasmi");
  cy.get('[name="email"]').type("test@test.com");
  cy.get('[name="phone"]').type("1234567890");
  cy.get('[name="address"]').type("Al Masayef");
  cy.get('[name="city"]').type("Ramallah");
  cy.get('[name="state"]').select("New York");
  cy.get('[name="zip"]').type("8080");
  cy.get('[name="website"]').type("google.com");
  cy.get(".radio").find('[value="yes"]').click();
  cy.get('[name="comment"]').type("cool description");
  cy.get(".btn-default").click();
});
