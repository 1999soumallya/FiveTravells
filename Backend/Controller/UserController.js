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
    const FilterFlightSector = await FileUploadModel.findOne({ SECTOR: Destination.toUpperCase() })
    if (FilterFlightSector) {
        const FilerFlightForm = await FileUploadModel.findOne({ FORM: Origin.toUpperCase() })
        if (FilerFlightForm) {
            const FilerFlightDepture_Date = await FileUploadModel.findOne({ DEPARTURE_DATE: Depture_Date.split('-')[Depture_Date.split('-').length - 1] + '-' + Depture_Date.split('-')[Depture_Date.split('-').length - 2] + '-' + Depture_Date.split('-')[0] })
            if (FilerFlightDepture_Date) {
                const Filter = await FileUploadModel.find({ SECTOR: Destination.toUpperCase(), FORM: Origin.toUpperCase(), DEPARTURE_DATE: Depture_Date.split('-')[Depture_Date.split('-').length - 1] + '-' + Depture_Date.split('-')[Depture_Date.split('-').length - 2] + '-' + Depture_Date.split('-')[0] })
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