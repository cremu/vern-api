require('dotenv').config()

const env = process.env.NODE_ENV || 'development'

let config = {}
switch (env) {
  case 'dev':
  case 'development':
    config = require('./dev')
    break
  case 'production':
    config = require('./prod')
}

module.exports = config
