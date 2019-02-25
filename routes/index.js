const express = require('express')
const router = express.Router()
const {
  Account
} = require('../models/index')

router.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = router