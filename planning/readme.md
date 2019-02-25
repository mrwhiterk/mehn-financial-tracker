# Money Moves

A financial tracking app that can help you understand where your money is going.

## Purpose

This is my planning Document

### Needs

I will need to have a way where users can manually input basic account info while also not asking for private information. I will then need to create a way to append transactions to those account and be able to calculate running totals. I will have 3 models; users, accounts and transactions. The properties that exist on my user will be username and password. The properties that exist on Account will be Name, Type, last 4 of account number, and balance. The properties that exist on Transaction will be name, type, optional subject, and price.

## Data Relationship

A User has many accounts.
Account has many transactions.
Transactions belong to one account.
Account belongs to one user.

```
Account: "Visa Credit Card X-9944 $45.00"
  => Transaction: "Safeway debit milk $3.99"
  => Transaction: "Job Inc credit paycheck $899.00"
```

## Screenshots

I have attached several screenshots from [Mint.com](https://mint.com/)
I will use these as a base to conceptualize my model and possibly views.

## Deployment

I will be deploying this application on heroku

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Mongo](https://www.mongodb.com/) - The Database used
- [Handlebars](https://handlebarsjs.com/) - The templating engine used
- [NPM](https://www.npmjs.com/) - Dependency Management
