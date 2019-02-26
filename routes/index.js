const express = require('express')
const router = express.Router()
const {
  Account
} = require('../models/index')

router.get('/', (req, res) => {
  Account.find({})
    .then(accounts => {
      res.render('index', {
        accounts
      })
    })
})

module.exports = router