const mongoose = require('mongoose')

const WebsiteSchema = mongoose.Schema({
  title: String,
  contacts: Array
})

module.exports = mongoose.model("Websites", WebsiteSchema)