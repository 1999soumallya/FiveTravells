const asyncHandler = require('express-async-handler')
const { ConnectMysql } = require('../Config/Connection')
const FileUploadModel = require('../Models/FileUploadModel')
const FormatMongoData = require('../utils/MongoFormatData')
const Constants = require('../Constants/Constants')

const connection = ConnectMysql()

module.exports.AirportDetails = asyncHandler(async (req, res) => {
    await connection.query("SELECT DISTINCT City_Name FROM `AirportDetails` WHERE `City_Name` != 'Delhi' AND `City_Name` != 'Bangalore';", (err, result) => {
        if (err) console.log(err);
        if (result) res.status(200).json(result);
    })
})

module.exports.GetFlightDetails = asyncHandler(async (req, res) => {
    const { Destination, Origin, Depture_Date } = req.body
    await connection.query(`SELECT DISTINCT * FROM FlightDetails WHERE DEPARTURE_DATE = '${Depture_Date}' AND FORM = '${Origin}' AND SECTOR= '${Destination}'`, (err, result) => {
        if (err) console.log(err);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS('Week'))
        }
    })
})

module.exports.GetWeeklyFlightDetails = asyncHandler(async (req, res) => {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    console.log(new Date().toISOString());
    return
    const FlightDeta = await FileUploadModel.find({ DEPARTURE_DATE: { $gte: new Date(), $lte: date } })
    if (FlightDeta.length > 0) {
        res.status(200).send(FormatMongoData(FlightDeta))
    } else {
        res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS('Week'))
    }
})