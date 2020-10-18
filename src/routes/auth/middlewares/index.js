module.exports = {
  authenticateUser: require('./authenticateUser'),
  deauthenticateUser: require('./deauthenticateUser'),
  getAuthenticatedUser: require('./getAuthenticatedUser'),
  isAuthenticated: require('./isAuthenticated'),
  isAuthorized: require('./isAuthorized'),
  isPasswordCorrect: require('./isPasswordCorrect'),
  isEmailRegistered: require('./isEmailRegistered'),
  isNameRegistered: require('./isNameRegistered'),
  registerNewUser: require('./registerNewUser'),
  isApiKeyMatched: require('./isApiKeyMatched'),
}
