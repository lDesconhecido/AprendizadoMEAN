// Porta do BackEnd...
const port = 3003
// Cara que vai interpretar requisições...
const bodyParser = require('body-parser')
// Cara que mexe com urls
const express = require('express')
const server = express()
// Dando mais poder ao bodyParser...
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
// Definindo que é pra escutar a porta...
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server