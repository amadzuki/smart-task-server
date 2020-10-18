const express = require('express')
const router = express.Router()
const task = require('./middlewares')
const auth = require('../auth/middlewares')

router.get('/', auth.isApiKeyMatched, task.getAll)

module.exports = router
