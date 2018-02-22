const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.get('/sitemap', (req, res, next) => {
//   res.sendFile('./sitemap.xml' , { root : __dirname })
// })

const staticFiles = express.static(path.join(__dirname, '/dist'))

app.use(staticFiles)
app.use(history({ disableDotRule: true, verbose: true }))
app.use(staticFiles)

const server = app.listen(process.env.PORT || 8000, () => {
  const port = server.address().port
  console.log('Server alive on port', port)
})
