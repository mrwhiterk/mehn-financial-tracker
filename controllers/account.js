const {
  Account
} = require("../models/index")

module.exports = {
  index: (req, res) => {
    Account.find({})
      .sort({
        createdAt: -1
      })
      .then(accounts => {
        res.render("index", {
          accounts
        })
      })
  },
  show: (req, res) => {
    console.log('show hit')
    Account.findOne({
        _id: req.params.id
      })
      .exec((err, account) => {
        res.render('account/show', {
          account
        })
      })
  },
  create: (req, res) => {
    Account.create({
      name: req.body.account.name,
      type: req.body.account.type,
      lastFour: req.body.account.lastFour,
      balance: req.body.account.balance
    }).then(_ => {
      res.redirect("/")
    })
  },
  new: (req, res) => {
    res.render('account/new')
  }

}