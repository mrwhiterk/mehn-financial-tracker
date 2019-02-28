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
    Account.findOne({
      _id: req.params.accountId
    }).then(account => {
      var transaction;
      account.transactions.forEach(trans => {
        if (trans._id == req.params.id) {
          transaction = trans
        }
      })
      res.render('transaction/show', {
        transaction
      })
    })
  },
  create: (req, res) => {

    Account.findOne({
      _id: req.params.accountId
    }).then(account => {
      account.transactions.push({
        name: req.body.transaction.name,
        type: req.body.transaction.type,
        detail: req.body.transaction.detail,
        price: req.body.transaction.price
      })

      account.save(err => {
        if (err) return res.status(500).send(err)

        res.redirect(`/account/${account._id}`)
      })
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