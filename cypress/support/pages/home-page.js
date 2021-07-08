const LIST_GROUP_ITEMS = ".list-group";
const CARD_BLOCK = ".card-block";
const CARD_TITLE = ".card-title";
const CARD_TEXT = '[id="article"]';
import data from "../../fixtures/product-info.json";
export default class HomePage {
  openUrl() {
    cy.visit("https://www.demoblaze.com/index.html#");
  }

  clickOnMonitorCategory() {
    cy.get(LIST_GROUP_ITEMS).contains("Monitors").click();
  }

  assertProductInfo() {
    cy.wait(2000);
    cy.get(CARD_BLOCK).last().should("contain", data.price);
    cy.get(CARD_TITLE).last().should("have.text", data.title);
    cy.get(CARD_TEXT).last().should("contain", data.text);
  }
  clickOnMonitor() {
    cy.get(CARD_TITLE).last().click();
  }
}
