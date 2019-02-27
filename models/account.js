const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const Transaction = require('./transaction')

const AccountSchema = new Schema({
  name: String,
  type: String,
  lastFour: Number,
  balance: Number,
  transactions: [Transaction]
}, {
  timestamps: true
})

module.exports = AccountSchema