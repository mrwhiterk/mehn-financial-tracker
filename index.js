const express = require('express')
const app = express()

const hbs = require("hbs")
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

app.set('view-engine', 'hbs')
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'))
app.use(methodOverride("_method"))

// app.use(require('./routes/index'))

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`☑️ PORT: ${app.get('port')} 🤩`)
})