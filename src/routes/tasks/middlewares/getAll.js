const models = require('../../../models')
const Task = models.task

module.exports = async (req, res) => {
  const tasks = await Task.findAll()

  res.status(200).send({ message: 'List of all tasks', data: tasks })
}
