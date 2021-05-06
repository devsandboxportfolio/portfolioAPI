const mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
const ArticleSchema = mongoose.Schema({
  articleName: {
    type: String,
    required: true,
    trim: true,
  },
  author: String,
  text: String,
  userId: {
    type: ObjectId,
    required: true,
  },
}, {
  timestamps: true
})

module.exports = mongoose.model("Article", ArticleSchema)