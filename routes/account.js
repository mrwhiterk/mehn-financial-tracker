const express = require('express')
const router = express.Router()
const accountController = require("../controllers/account")

router.post("/", accountController.create)
router.get("/new", accountController.new)
router.get("/:id", accountController.show)
router.put("/:id", accountController.update)
// router.delete("/:id", accountController.delete)

module.exports = router