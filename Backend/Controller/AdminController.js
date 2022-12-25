const asyncHandler = require('express-async-handler')
const FileUploadModel = require('../Models/FileUploadModel')

module.exports.GetAllFlightData = asyncHandler(async (req, res) => {
    const FlightDetails = await FileUploadModel.find({})
    res.status(200).json(FlightDetails)
})
