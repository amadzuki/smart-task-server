module.exports = {
  authenticateUser: null,
  deauthenticateUser: null,
  getAuthenticatedUser: null,
  isAuthenticated: null,
  isAuthorized: null,
  isPasswordCorrect: null,
  isEmailRegistered: require('./isEmailRegistered'),
  isNameRegistered: require('./isNameRegistered'),
  registerNewUser: require('./registerNewUser'),
}
