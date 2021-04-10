const express    = require("express")
const router     = express.Router()
const controller = require("../controllers/UserController")

router.get("/", controller.getUser)
router.post("/create", controller.create)
router.post("/update/:userId", controller.update)
router.delete("/:userId", controller.delete)

module.exports = router