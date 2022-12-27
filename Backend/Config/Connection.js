const mongoose = require('mongoose')
const constants = require('../Constants/Constants')
const mysql = require('mysql')
const Constants = require('../Constants/Constants')
require('colors')

const ConnectMongoose = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(constants.config.CONNECTIONSTRING)
    const db = mongoose.connection
    db.on('error', (error) => console.error(`Error Is ${error}`.red))
    db.once('open', () => console.log(`Detabase Connected!`.inverse.green))
}

const ConnectMysql = () => {
    let connection = mysql.createConnection({
        host: "localhost",
        user: Constants.config.user,
        password: Constants.config.password,
        database: Constants.config.database
    })
    connection.connect(function (err) {
        if (err) console.log(err);
        console.log("Mysql Server is connected");
    })
    return connection
}

module.exports = { ConnectMongoose, ConnectMysql }