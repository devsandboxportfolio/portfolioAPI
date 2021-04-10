const User = require('../models/User')

exports.getUser = (req, res, next) => {
  User.find().then(users => res.json(users)).catch(error => res.status(400).json("ERROR: " + error))
}