const models = require('../../../models')
const User = models.user

module.exports = async (req, res) => {
  const users = await User.findAll()

  res.status(200).send({ message: 'List of all users', data: users })
}
