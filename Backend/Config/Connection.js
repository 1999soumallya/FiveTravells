const mongoose = require('mongoose')
const constants = require('../Constants/Constants')
require('colors')

const ConnectMongoose = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(constants.config.CONNECTIONSTRING)
    const db = mongoose.connection
    db.on('error', (error) => console.error(`Error Is ${error}`.red))
    db.once('open', () => console.log(`Detabase Connected!`.inverse.green))
}

module.exports = { ConnectMongoose }