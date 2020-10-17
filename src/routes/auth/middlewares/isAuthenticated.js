const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    if (accessToken) {
      const decodedToken = await jwt.verify(accessToken, process.env.SECRET_KEY)
      req.decodedToken = decodedToken
      next()
    } else {
      res.status(401).send({
        message: 'User is unable to authenticate',
        error: 'Token is invalid',
      })
    }
  } catch (error) {
    res.status(400).send({ message: 'Error getting token from header' })
  }
}
