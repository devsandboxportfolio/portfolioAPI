const express = require('express')
const router = express.Router()
const controller = require("../controllers/ArticleController")
const authenticateToken = require('devsandbox-authenticate')

router.get("/", controller.getAllArticles)
router.get("/:articleId", controller.getArticle)
router.post("/", authenticateToken, controller.createArticle)
router.put("/:articleId", authenticateToken, controller.updateArticle)
router.delete("/:articleId", authenticateToken, controller.deleteArticle)

module.exports = router