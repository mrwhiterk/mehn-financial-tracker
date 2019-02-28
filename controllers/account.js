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
    Account.findOne({
        _id: req.params.id
      })
      .exec((err, account) => {
        let total = 0
        account.transactions.map(x => total += x.price)
        account.balance = total
        account.save(err => {
          if (err) return res.status(500).send(err)

          res.render('account/show', {
            account
          })
        })
      })
  },
  create: (req, res) => {
    Account.create({
      name: req.body.account.name,
      type: req.body.account.type,
      lastFour: req.body.account.lastFour,
      balance: 0
    }).then(_ => {
      res.redirect("/")
    })
  },
  new: (req, res) => {
    res.render('account/new')
  },
  update: (req, res) => {
    Account.findOne({
      _id: req.params.id
    }).then(account => {
      account.name = req.body.account.name
      account.type = req.body.account.type
      account.lastFour = req.body.account.lastFour
      account.balance = req.body.account.balance

      account.save(err => {
        if (err) return res.status(500).send(err)
        res.redirect(`/account/${account._id}`)
      })
    })
  },
  delete: (req, res) => {
    Account.findByIdAndRemove({
      _id: req.params.id
    }).then(account => {
      res.redirect('/')
    })
  }

}