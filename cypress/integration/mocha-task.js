var assert = require("assert");
const cartItems = ["Orange", "Banana", "Apple", "Strawberry"];
it("cart should contain 4 items", () => {
  assert.equal(cartItems.length, 4);
  console.log(cartItems.length);
});

it("second item in the cart should be Banana", () => {
  assert.equal(cartItems[1], "Banana");
  console.log(cartItems[1]);
});

it("items should be sorted alphabetically", () => {
  assert.equal(cartItems.sort(), "Apple,Banana,Orange,Strawberry");
  console.log(cartItems.sort());
});
it("number of items should become 5 after adding Mango", () => {
  cartItems.push("Mango");
  assert.equal(cartItems.length, 5);
});
