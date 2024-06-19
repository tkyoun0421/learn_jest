const Calculator = require("../calculator");

describe("Calculator", () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });
  it("inits with 0", () => {
    expect(calc.value).toBe(0);
  });

  it("sets", () => {
    calc.set(9);
    expect(calc.value).toBe(9);
  });

  it("clears", () => {
    calc.set(9);
    calc.clear();
    expect(calc.value).toBe(0);
  });

  it("adds", () => {
    calc.set(1);
    calc.add(3);
    expect(calc.value).toBe(4);
  });

  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      calc.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("multiplies", () => {
    calc.set(1);
    calc.multiply(3);
    expect(calc.value).toBe(3);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      calc.divide(0);
      expect(calc.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      calc.set(1);
      calc.divide(0);
      expect(calc.value).toBe(Infinity);
    });
  });
});
