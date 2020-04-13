const express = require('express')
const connect = require('./db')
const config = require('./config/index')

const app = express()

//middleware

// routes

const start = async () => {
  try {
    await connect()
    app.listen(config.PORT, () => {
      console.log(`-> Server's listening on port ${config.PORT}`)
      console.log(`-> REST API on http://localhost:${config.MONGODB_URL}`)
    })
  } catch (e) {
    console.error(e)
  }
}
module.exports = {
  app: app,
  start: start,
}
