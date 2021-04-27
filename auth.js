const express    = require("express")
const jwt        = require('jsonwebtoken')

app.use(express.json())

const authenticateToken = (req, res, callback) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }

    req.user = user
    callback()
  })
};

export { authenticateToken };
