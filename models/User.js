const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 4
  },
  emailAddress: String,
}, {
  timestamps: true
})

module.exports = mongoose.model("User", UserSchema)