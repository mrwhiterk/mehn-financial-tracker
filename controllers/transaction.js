const {
  Transaction
} = require("../models/index")
const {
  Account
} = require("../models/index")

module.exports = {
  index: (req, res) => {
    Transaction.find({})
      .then(transactions => {
        res.render("index", {
          transactions
        })
      })
  },
  show: (req, res) => {
    Transaction.findOne({
        _id: req.params.id
      })
      .exec((err, transaction) => {
        res.render('transaction/show', {
          transaction
        })
      })
  },
  create: (req, res) => {
    Transaction.create({
      name: req.body.account.name,
      type: req.body.account.type,
      detail: req.body.account.detail,
      price: req.body.account.price
    }).then(_ => {
      res.redirect("/")
    })
  },
  new: (req, res) => {
    res.render('transaction/new')
  },
  update: (req, res) => {
    Transaction.findOne({
      _id: req.params.id
    }).then(transaction => {
      transaction.name = req.body.transaction.name
      transaction.type = req.body.transaction.type
      transaction.lastFour = req.body.transaction.lastFour
      transaction.balance = req.body.transaction.balance

      transaction.save(err => {
        if (err) return res.status(500).send(err)
        res.redirect(`/transaction/${transaction._id}`)
      })
    })
  },
  delete: (req, res) => {
    Transaction.findByIdAndRemove({
      _id: req.params.id
    }).then(transaction => {
      res.redirect('/')
    })
  }

}