const express = require('express')
const router = express.Router()

const auth = require('./middlewares')

// Register new user
router.post(
  '/register',
  auth.isEmailRegistered,
  auth.isNameRegistered,
  auth.registerNewUser
)

module.exports = router
