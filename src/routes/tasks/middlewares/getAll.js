const models = require('../../../models')
const Task = models.task
const SubTask = models.subtask

module.exports = async (req, res) => {
  const tasks = await Task.findAll({ include: SubTask })

  res.status(200).send({ message: 'List of all tasks', data: tasks })
}
