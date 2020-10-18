const models = require('../../../models')
const User = models.user
const Task = models.task

module.exports = async (req, res) => {
  const users = await User.findAll({ include: Task })

  res.status(200).send({ message: 'List of all users', data: users })
}
