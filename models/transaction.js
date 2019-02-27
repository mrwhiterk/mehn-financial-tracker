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


module.exports = TransactionSchema