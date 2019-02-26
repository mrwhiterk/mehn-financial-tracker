const express = require('express')
const router = express.Router()
const {
  Account
} = require('../models/index')

const authenticatedUser = require('../utils/authenticatedUser')

router.get('/', (req, res) => {
  Account.find({})
    .then(accounts => {
      res.render('index', {
        accounts,
        success: req.flash("success")
      })
    })
})

router.use(require('./user'))

module.exports = router