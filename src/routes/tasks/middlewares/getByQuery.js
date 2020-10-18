const models = require('../../../models')
const Task = models.task

module.exports = async (req, res) => {
  const query = req.query

  const results = await Task.findAll({ where: query })

  if (results.length === 0) {
    res.status(401).send({ message: 'Task did not exist' })
  } else {
    res
      .status(200)
      .send({ message: 'Task successfully filtered', data: results })
  }
}
