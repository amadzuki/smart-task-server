const models = require('../../../models')
const User = models.user
const Task = models.task

module.exports = async (req, res) => {
  const users = await User.findAll({
    include: {
      model: Task,
      attributes: ['task', 'taskDate', 'taskDuration', 'location'],
    },
    attributes: ['name'],
  })

  res.status(200).send({ message: 'List of all users', data: users })
}
