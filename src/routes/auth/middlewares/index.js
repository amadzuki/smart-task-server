module.exports = {
  authenticateUser: require('./authenticateUser'),
  deauthenticateUser: null,
  getAuthenticatedUser: null,
  isAuthenticated: null,
  isAuthorized: null,
  isPasswordCorrect: require('./isPasswordCorrect'),
  isEmailRegistered: require('./isEmailRegistered'),
  isNameRegistered: require('./isNameRegistered'),
  registerNewUser: require('./registerNewUser'),
}
