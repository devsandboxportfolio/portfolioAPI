const User = require('../models/User')

exports.getUser = (req, res, next) => {
  // res.render('frontend/src/components/users/index')
  User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json("ERROR: " + error))
}

exports.create = (req, res, next) => {
  console.log(req.body)

  const userName     = req.body.userName;
  const emailAddress = req.body.emailAddress;
  const newUser      = new User({userName: userName, emailAddress:emailAddress});
  
  newUser.save()
    .then(() => res.json('user added'))
    .catch(err => res.status(400).json('error'))

}

exports.update = (req, res, next) => {
  console.log(req.params.id)
}

exports.delete = async (req, res, next) => {
  await User.deleteOne({_id: req.params.userId})
  const users = await User.find()
  res.json(users)
}