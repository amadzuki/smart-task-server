const models = require('../../../models')
const User = models.user

module.exports = async (req, res, next) => {
  const user = await User.findOne({ where: { name: req.body.name } })

  if (user) {
    req.isNameRegistered = true
    req.user = user
    next()
  } else {
    req.isNameRegistered = false
    next()
  }
}
