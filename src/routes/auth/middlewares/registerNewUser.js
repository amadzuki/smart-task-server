const bcrypt = require('bcrypt')
const models = require('../../../models')
const User = models.user

module.exports = async (req, res) => {
  if (req.isEmailRegistered) {
    res.status(409).send({
      message: 'Another user is already registered using that email',
      data: { email: req.user.email },
    })
  } else if (req.isNameRegistered) {
    res.status(409).send({
      message: 'Another user is already using that name',
      data: { name: req.user.name },
    })
  } else {
    const { name, email, password } = req.body
    const saltRounds = 11
    const hash = await bcrypt.hash(password, saltRounds)

    const newUser = {
      name: name,
      email: email,
      hash: hash,
    }

    await User.create(newUser)

    res.status(200).send({
      message: 'User successfully registered',
      data: { user: { name: name, email: email } },
    })
  }
}
