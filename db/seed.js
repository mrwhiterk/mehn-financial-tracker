const {
  Account
} = require("../models/index")

Account.remove({})
  .then(_ => {
    Account.insertMany([{
          name: "bank of america",
          type: "checking",
          lastFour: 8554,
          balance: 500
        },
        {
          name: "chase",
          type: "savings",
          lastFour: 9054,
          balance: 800
        },
        {
          name: "One Main",
          type: "credit card",
          lastFour: 3414,
          balance: 200
        }
      ])
      .then(accounts => {
        console.log(accounts)
        process.exit()
      })
  })