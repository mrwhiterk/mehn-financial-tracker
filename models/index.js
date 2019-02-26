const mongoose = require('../db/connection')

module.exports = {
  Account: mongoose.model("Account", require("./account")),
  User: mongoose.model("User", require("./user"))
}