const express = require('express')
const router = express.Router()

const auth = require('./middlewares')

// Get User Profile
router.get('/profile', auth.isAuthenticated, auth.getAuthenticatedUser)

// Register new user
router.post(
  '/register',
  auth.isEmailRegistered,
  auth.isNameRegistered,
  auth.registerNewUser
)

// Login
router.post(
  '/login',
  auth.isEmailRegistered,
  auth.isPasswordCorrect,
  auth.authenticateUser
)

//Logout
router.post('/logout', auth.isAuthenticated, auth.deauthenticateUser)

module.exports = router
