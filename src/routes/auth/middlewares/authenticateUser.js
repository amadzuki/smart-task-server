const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
  const payload = {
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  }
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: '3 days',
  })

  res.status(200).send({
    message: 'User successfully authenticated',
    data: { token: token },
  })
}
