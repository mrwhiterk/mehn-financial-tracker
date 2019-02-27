const express = require('express')
const router = express.Router()
const transactionController = require("../controllers/transaction")

router.post("/", transactionController.create)
router.get("/new", transactionController.new)
router.get("/:id", transactionController.show)
router.put("/:id", transactionController.update)
router.delete("/:id", transactionController.delete)

module.exports = router