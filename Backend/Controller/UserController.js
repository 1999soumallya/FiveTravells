const asyncHandler = require('express-async-handler')
const { ConnectMysql } = require('../Config/Connection')
const FileUploadModel = require('../Models/FileUploadModel')
const FormatMongoData = require('../utils/MongoFormatData')
const Constants = require('../Constants/Constants')
const isodate = require("isodate");

const connection = ConnectMysql()

module.exports.AirportDetails = asyncHandler(async (req, res) => {
    await connection.query("SELECT DISTINCT City_Name FROM `AirportDetails` WHERE `City_Name` != 'Delhi' AND `City_Name` != 'Bangalore';", (err, result) => {
        if (err) console.log(err);
        if (result) res.status(200).json(result);
    })
})

module.exports.GetFlightDetails = asyncHandler(async (req, res) => {
    const { Destination, Origin, Depture_Date } = req.body
    const FilterFlightSector = await FileUploadModel.findOne({ SECTOR: Destination.toUpperCase() })
    if (FilterFlightSector) {
        const FilerFlightForm = await FileUploadModel.findOne({ FORM: Origin.toUpperCase() })
        if (FilerFlightForm) {
            const FilerFlightDepture_Date = await FileUploadModel.findOne({ DEPARTURE_DATE: isodate(Depture_Date) })
            if (FilerFlightDepture_Date) {
                const Filter = await FileUploadModel.find({ SECTOR: Destination.toUpperCase(), FORM: Origin.toUpperCase(), DEPARTURE_DATE: isodate(Depture_Date) })
                if (Filter) {
                    res.status(200).send(FormatMongoData(Filter))
                }
            } else {
                res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS(Depture_Date))
            }
        } else {
            res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS(Origin))
        }
    } else {
        res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS(Destination))
    }
})

module.exports.GetWeeklyFlightDetails = asyncHandler(async (req, res) => {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    const FlightDeta = await FileUploadModel.find({ DEPARTURE_DATE: { $gte: new Date(), $lte: date } })
    if (FlightDeta.length > 0) {
        res.status(200).send(FormatMongoData(FlightDeta))
    } else {
        res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS('Week'))
    }
})