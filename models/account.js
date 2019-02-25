const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
  name: String,
  type: String,
  detail: String,
  price: Number
}, {
  timestamps: true
})

const AccountSchema = new Schema({
  name: String,
  type: String,
  lastFour: Number,
  balance: Number,
  transactions: [TransactionSchema]
}, {
  timestamps: true
})

module.exports = AccountSchema