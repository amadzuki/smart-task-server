module.exports = (req, res) => {
  const { name } = req.decodedToken
  res.status(200).send({ message: `User ${name} is successfully logged out` })
}
