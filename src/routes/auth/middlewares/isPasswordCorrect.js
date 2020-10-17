const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
  if (!req.isEmailRegistered) {
    res.status(401).send({
      message: 'The email is not registered yet!',
      data: { email: req.body.email },
    })
  } else {
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      req.user.hash
    )
    req.isPasswordCorrect = isPasswordCorrect
    next()
  }
}
