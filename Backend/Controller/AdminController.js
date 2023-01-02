const asyncHandler = require('express-async-handler');
const { ConnectMysql } = require('../Config/Connection');

const connection = ConnectMysql()

module.exports.GetAllFlightData = asyncHandler(async (req, res) => {
    await connection.query(`SELECT DISTINCT * FROM flightdetails`, (err, result) => {
        if (err) console.log(err);
        if (result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS('for this Week'))
        }
    })
})