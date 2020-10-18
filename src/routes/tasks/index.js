const express = require('express')
const router = express.Router()
const task = require('./middlewares')
const auth = require('../auth/middlewares')

router.get('/', auth.isApiKeyMatched, task.getAll)

// GET tasks queried by time or location
router.get('/list', auth.isAuthenticated, task.getByQuery)

router.post('/', auth.isAuthenticated, task.getDataFromBody, task.addNewTask)

router.get('/:id', auth.isApiKeyMatched, task.getByIdWithSubTasks)
// POST task by single string
router.post(
  '/string',
  auth.isAuthenticated,
  task.taskCapture,
  task.dateCapture,
  task.timeCapture,
  task.addNewTask
)

module.exports = router
