const passport = require('passport')
const {
  User
} = require('../models/index')

module.exports = {
  getSignup: (req, res) => {
    res.render('user/signup', {
      error: req.flash('error')
    })
  },
  postSignup: (req, res) => {
    const {
      username,
      password
    } = req.body
    User.register(new User({
        username
      }), password)
      .then(user => {
        const authenticate = passport.authenticate('local')

        authenticate(req, res, () => {
          req.flash('success', 'You created an account!')
          res.redirect('/')
        })
      })
      .catch(err => {
        req.flash('error', err.message)
        res.redirect('/signup')
      })
  },
  getLogin: (req, res) => {
    res.render('user/login', {
      error: req.flash('error'),
      info: req.flash('info')
    })
  },
  postLogin: (req, res, next) => {
    const authenticate = passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        req.flash('error', info.message)
        res.redirect('/login')
      }

      req.logIn(user, (err) => {
        if (err) {
          req.flash('error', err.message)
          return res.redirect('/login')
        }
        req.flash('success', 'You logged in')
        return res.redirect('/')
      })
    })

    authenticate(req, res, next)
  },
  getLogout: (req, res) => {
    req.logout()
    res.redirect('/')
  }
}