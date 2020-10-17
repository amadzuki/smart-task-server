const models = require('../../../models')
const User = models.user

module.exports = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } })

  if (user) {
    req.isEmailRegistered = true
    req.user = user
    next()
  } else {
    req.isEmailRegistered = false
    next()
  }
}
