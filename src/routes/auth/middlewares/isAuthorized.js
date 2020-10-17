const models = require('../../../models')
const User = models.user

module.exports = async (req, res, next) => {
  const id = +req.params.id
  const user = await User.findByPk(+req.decodedToken.id)

  if (id === user.id) {
    req.user = user
    next()
  } else {
    res.status(403).send({
      message: 'Unauthorized action',
      error: 'The id inside token does not matched with the expected id',
    })
  }
}
