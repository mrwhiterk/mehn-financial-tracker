const express = require('express')
const router = express.Router()
const {
  Account
} = require('../models/index')

const authenticatedUser = require('../utils/authenticatedUser')

router.get('/', (req, res) => {
  Account.find({})
    .then(accounts => {
      let networth = 0
      accounts.map(x => networth += x.balance)
      res.render('index', {
        accounts,
        networth,
        success: req.flash("success")
      })
    })
})

router.use(require('./user'))
router.use('/account', require('./account.js'))
router.use('/transaction', require('./transaction'))
module.exports = router