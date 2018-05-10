const express = require('express')
const request = require('request')
const config = require('config')

const app = express()

app.use('/', express.static(__dirname + '/_site'))
app.get('/proxy', (req, res, next) => {
  const url = req.query.url
  request(url)
    .on('error', next)
    .pipe(res)
})

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message })
})

app.listen(config.port, () =>
  console.log(
    `Listening on port ${config.port} in ${process.env.NODE_ENV} mode`
  )
)
