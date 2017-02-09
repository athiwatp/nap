const mongoose = require('mongoose')
const { getSchema } = require('@risingstack/graffiti-mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/graphql')

// Custom
const User = require(  './user')
const Pet = require(  './pet')

module.exports = getSchema([Pet, User])