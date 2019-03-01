const express = require('express')
const router = express.Router()
const {
  Account
} = require('../models/index')

const authenticatedUser = require('../utils/authenticatedUser')

router.get('/', authenticatedUser, (req, res) => {
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
router.use('/account', authenticatedUser, require('./account.js'))
router.use('/transaction', authenticatedUser, require('./transaction'))
module.exports = router