/// <reference types="cypress" />
import ProductPage from "../support/pages/product-page";
import HomePage from "../support/pages/home-page";

describe("To test adding a laptop to cart", () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  it("should add laptop to cart succcessfully", () => {
    homePage.openUrl();
    homePage.clickOnMonitorCategory();
    homePage.assertProductInfo();
    homePage.clickOnMonitor();
    productPage.assertMonitorDetails();
    productPage.clickOnAddToCartButton();
  });
});
