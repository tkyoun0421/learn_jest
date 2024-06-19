const UserClient = require("../user-client");
const UserService = require("../user-service");

jest.mock("../user-client");

describe("user-service", () => {
  const login = jest.fn(async () => "success");

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });

  it("로그인이 두번 되어도 로그인은 한번만 실행되어야 한다", async () => {
    await userService.login("abc", "abc");
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });
});
