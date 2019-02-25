const mongoose = require('../db/connection')

module.exports = {
  Account: mongoose.model("Account", require("./account"))
}