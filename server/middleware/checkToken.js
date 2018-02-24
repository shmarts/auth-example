import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']
  if (token) {
    // Verifies secret and checks exp
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) res.send(err)
      req.decoded = decoded
      next()
    })
  } else {
    return res.status(403).send({ 'error': true })
  }
}
