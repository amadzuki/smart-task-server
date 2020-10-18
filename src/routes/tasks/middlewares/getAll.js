const models = require('../../../models')
const Task = models.task
const User = models.user

module.exports = async (req, res) => {
  const tasks = await Task.findAll({
    include: { model: User, attributes: ['name'] },
  })

  res.status(200).send({ message: 'List of all tasks', data: tasks })
}
