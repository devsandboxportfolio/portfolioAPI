const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  description: String,
  objectives: Map
}, {
  timestamps: true
})

module.exports = mongoose.model("Project", ProjectSchema)