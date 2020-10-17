const express = require('express')
const router = express.Router()
const Task = require('./middlewares')

router.get('/', Task.getAll)

module.exports = router
