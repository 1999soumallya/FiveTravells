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
    const FilterFlightDetails = await FileUploadModel.find({ SECTOR: Destination.toUpperCase(), FORM: Origin.toUpperCase(), DEPARTURE_DATE: Depture_Date.split('-')[Depture_Date.split('-').length - 1] + '-' + Depture_Date.split('-')[Depture_Date.split('-').length - 2] + '-' + Depture_Date.split('-')[0] })
    if (FilterFlightDetails) {
        if (FilterFlightDetails.length > 0) {
            res.status(200).json({
                _id: FilterFlightDetails._id,
                AIRLINE_LOGO: FilterFlightDetails.AIRLINE_LOGO,
                FORM: FilterFlightDetails.FORM,
                SECTOR: FilterFlightDetails.SECTOR,
                DEPARTURE_DATE: FilterFlightDetails.DEPARTURE_DATE,
                DEPARTURE_TIME: FilterFlightDetails.DEPARTURE_TIME,
                FLIGHT_DERATION_AND_LAYOVER: FilterFlightDetails.FLIGHT_DERATION_AND_LAYOVER,
                ARRIVAL_TIME: FilterFlightDetails.ARRIVAL_TIME,
                TOTAL_SEATS: FilterFlightDetails.TOTAL_SEATS,
                SEATS_AVAILABLE: FilterFlightDetails.SEATS_AVAILABLE,
                SEATS_SOLD: FilterFlightDetails.SEATS_SOLD,
                PRICE: FilterFlightDetails.PRICE,
            })
        } else {
            res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS);
        }
    }
})