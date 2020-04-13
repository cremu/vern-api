const mongoose = require('mongoose')
const config = require('./config/index')

const connect = async () => {
  await mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
const connection = mongoose.connection
connection.once('open', () => {
  console.log(`-> Mongodb database is connected`)
})

module.exports = connect
