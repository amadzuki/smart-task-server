const express = require('express')
const router = express.Router()
const task = require('./middlewares')

router.get('/', task.getAll)

module.exports = router
