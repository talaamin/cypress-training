const PRODUCT_NAME = ".name";
const PRICE_CONTAINER = ".price-container";
const PRODUCT_DESCRIPTION = ".description";
const ADD_TO_CART_BUTTON = ".btn-success";
import data from "../../fixtures/product-info.json";

export default class ProductPage {
  assertMonitorDetails() {
    cy.get(PRODUCT_NAME).should("have.text", data.title);
    cy.get(PRICE_CONTAINER).should("contain", data.price);
    cy.get(PRODUCT_DESCRIPTION).contains("p", data.text).should("be.visible");
  }

  clickOnAddToCartButton() {
    cy.get(ADD_TO_CART_BUTTON)
      .should("have.css", "background-color", "rgb(92, 184, 92)")
      .click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Product added");
    });
  }
}
