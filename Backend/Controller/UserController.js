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
    const FlightDetails = await FileUploadModel.find({ SECTOR: Destination.toUpperCase(), FORM: Origin.toUpperCase(), DEPARTURE_DATE: Depture_Date })
    if (FlightDetails) {
        if (FlightDetails.length > 0) {
            res.status(201).json(FormatMongoData(FlightDetails))
        } else {
            res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS);
        }
    }
})