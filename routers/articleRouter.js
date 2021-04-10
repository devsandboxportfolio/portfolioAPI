const express = require('express')
const router = express.Router()
const controller = require("../controllers/ArticleController")

router.get("/", controller.getAllArticles)
router.get("/:articleId", controller.getArticle)
router.post("/", controller.createArticle)
router.put("/:articleId", controller.updateArticle)
router.delete("/:articleId", controller.deleteArticle)

module.exports = router