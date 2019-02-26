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
      name: req.body.blogPost.name,
      type: req.body.blogPost.type,
      lastFour: req.body.blogPost.lastFour,
      balance: req.body.blogPost.balance
    }).then(_ => {
      res.redirect("/")
    })
  },
  new: (req, res) => {
    res.render('account/new')
  }

}