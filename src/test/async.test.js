const fetchProduct = require("../async");

describe("Async", () => {
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 2000 });
      done();
    });
  });
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 2000 });
    });
  });
  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 2000 });
  });

  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 2000,
    });
  });
  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error!");
  });
});
