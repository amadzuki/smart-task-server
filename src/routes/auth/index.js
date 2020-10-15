const express = require('express')
const router = express.Router()

const auth = require('./middlewares')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).send({ message: 'List of all users', data: [] })
})

module.exports = router
