const Article = require('../models/Article')

exports.getAllArticles = async (req, res) => {
  try {
    const allArticles = await Article.find()
    res.json(allArticles)
  } catch(err) {
    res.json({message: err})
  }
}

exports.getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId)
    res.json(article)
  } catch(err) {
    res.json({message: err})
  }
}

exports.createArticle = async (req, res) => {
  try {
    const article = new Article({
      ...req.body
    })

    await article.save()
    const allArticles = await Article.find()
    res.json(allArticles)
  } catch(err) {
    res.json({message: err})
  }
}

exports.updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.updateOne(
      {_id: req.params.articleId}, 
      {$set: {
        ...req.body
      }}
    )
    const allArticles = await Article.find()
    res.json(allArticles)
  } catch(err) {
    res.json({message: err})
  }
}

exports.deleteArticle = async (req, res) => {
  try {
    await Article.deleteOne({_id: req.params.articleId})
    const allArticles = await Article.find()
    res.json(allArticles)
  } catch(err) {
    res.json({message: err})
  }
}