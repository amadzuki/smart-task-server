const express = require('express')
const router = express.Router()
const user = require('./middlewares')
const auth = require('../auth/middlewares')

/* GET users listing. */
router.get('/', auth.isApiKeyMatched, user.getAll)

// GET users with their tasks
router.get('/tasks', auth.isApiKeyMatched, user.getAllWithTasks)

module.exports = router
