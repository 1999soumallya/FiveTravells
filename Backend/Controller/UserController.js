const asyncHandler = require('express-async-handler')
const { ConnectMysql } = require('../Config/Connection')

const connection = ConnectMysql()

module.exports.AirportDetails = asyncHandler(async (req, res) => {
    await connection.query("SELECT DISTINCT City_Name FROM `AirportDetails` WHERE `City_Name` != 'Delhi' AND `City_Name` != 'Bangalore';", (err, result) => {
        if (err) console.log(err);
        if (result) res.status(200).json(result);
    })
})