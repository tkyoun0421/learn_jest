const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe("Yes");
    expect(onSuccess).toHaveBeenCalledWith("Yes");
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("should call onFail when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe("Yes");
    expect(onFail).toHaveBeenCalledWith("No");
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
