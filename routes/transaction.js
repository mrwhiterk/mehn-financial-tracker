const express = require('express')
const router = express.Router()
const transactionController = require("../controllers/transaction")

router.post("/:accountId", transactionController.create)
router.get("/new", transactionController.new)
router.get("/:accountId/:id", transactionController.show)
router.put("/:id", transactionController.update)
router.delete("/:id", transactionController.delete)

module.exports = router