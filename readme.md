# Money Moves

This is a application for tracking your expenses, understanding your spending habits, and ultimately how it affects your networth. You will be able to login and securely track your accounts with an interface that's not so precise as to create a security concern, for instance, if the server was to be comprimised. There is no PII request from users. The overall goal of this project was to empower a user to better utilize their income and work towards creating wealth.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Install Node
Install Npm
Install Mongo DB
```

### Installing

A step by step series of instructions of how to get your development environment running

Open up your terminal to where you want to put this project.

```
cd ~/Desktop/projects
```

```
git clone https://github.com/mrwhiterk/mehn-financial-tracker.git
```

```
cd mehn-financial-tracker
```

```
npm install
```

Open up separate terminal. If you haven't ran the mongo daemon process yet, run 'mongod'
If you have already, you can test by typing 'mongo'. If you get a prompt with '>', then your good to proceed.

Go back to your previous terminal and seed your database with 'node db/seed.js', you should see object like data printed to your console if done correctly.

```
run 'node index.js'
```

Visit the specified port in your browser

Congrats! Now, you should have a fully working copy on your development environment

## Deployment

I used Heroku with Mongo DB Atlas to deploy this application.

## Built With

- [Node](https://nodejs.org/en/) - Server Run-time
- [Npm](https://www.npmjs.com/) - Dependency Management
- [Express](https://expressjs.com/) - The web framework used
- [HandleBars](https://handlebarsjs.com/) - Used to generate HTML templates
- [Mongo](https://www.mongodb.com/) - Database

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Ryan White** - [PurpleBooth](https://github.com/PurpleBooth)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks Mint.com for being my inspiration and my favorite financial management site!
