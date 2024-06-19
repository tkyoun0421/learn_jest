class UserService {
  constructor(userClient) {
    this.userService = userClient;
    this.isLoggedIn = false;
  }

  login(id, password) {
    if (!this.isLoggedIn) {
      return this.userService
        .login(id, password)
        .then((data) => (this.isLoggedIn = true));
    }
  }
}

module.exports = UserService;
