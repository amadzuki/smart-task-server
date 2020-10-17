const models = require('../../../models')
const User = models.user

module.exports = async (req, res) => {
  const user = await User.findByPk(+req.decodedToken.id)
  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
  res
    .status(200)
    .send({ message: 'Get authenticated user data', data: userData })
}
