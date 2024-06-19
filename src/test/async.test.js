const fetchProduct = require("../async");

describe("Async", () => {
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 1000 });
    });
  });
});
