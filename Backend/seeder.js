const mysql = require('mysql')
const Constants = require('./Constants/Constants')

const connection = mysql.createConnection({
    host: Constants.config.host,
    user: Constants.config.user,
    password: Constants.config.password
})

connection.connect(function (err) {
    if (err) console.log(err);
    connection.query(`CREATE DATABASE IF NOT EXISTS ${Constants.config.database}`, (err, result) => {
        if (err) console.log(err);
        if (result.warningCount) {
            console.log("DataBase Already Exsist's");
            process.exit(0);
        } else {
            console.log("DataBase Created successFull");
            process.exit(0);
        }
    })
})
