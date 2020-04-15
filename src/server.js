const express = require('express')
const cors = require('cors')
const connect = require('./db')
const config = require('./config/index')
const userRouter = require('./resources/user/user.router')
const scriptRouter = require('./resources/script/script.router')

const app = express()

app.disable('x-powered-by')

//middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api/user', userRouter)
app.use('/api/script', scriptRouter)

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
