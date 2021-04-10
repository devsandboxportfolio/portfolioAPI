const express    = require("express")
const router     = express.Router()
const controller = require("../controllers/ProjectController")

router.get("/", controller.list)
router.get("/:type1/:param1", controller.view)
router.get("/:type1/:param1/:type2/:param2", controller.view)
router.get("/:type1/:param1/:type2/:param2/:type3/:param3", controller.view)
router.post("/", controller.create)
router.patch("/:projectId", controller.update)
router.delete("/:projectId", controller.delete)

module.exports = router