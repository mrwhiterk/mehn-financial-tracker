const express = require('express')
const app = express()

const hbs = require("hbs")
const methodOverride = require('method-override')
const bodyParser = require('body-parser')


const cookieParser = require("cookie-parser")
const flash = require("connect-flash")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

var Handlebars = require('handlebars');
var HandlebarsIntl = require('handlebars-intl');
HandlebarsIntl.registerWith(hbs);

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'))
app.use(methodOverride("_method"))

// authenticate
app.use(cookieParser())
app.use(session({
  secret: "Secret blog post",
  resave: false,
  saveUninitialized: false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

const {
  User
} = require("./models/index")
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(function (req, res, next) {
  global.user = req.user
  res.locals.user = req.user
  next()
})

app.use(require('./routes/index'))

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`☑️ PORT: ${app.get('port')} 🤩`)
})