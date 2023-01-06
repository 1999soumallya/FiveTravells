const asyncHandler = require('express-async-handler')
const { ConnectMysql } = require('../Config/Connection')
const Constants = require('../Constants/Constants')
const nodemailer = require('nodemailer')
const PreBookingFlightModel = require('../Models/FlightBookModel')
const FormatMongoData = require('../utils/MongoFormatData')

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
            connection.query(`SELECT DISTINCT * FROM FlightDetails WHERE FORM = '${Origin}'`, (err, result) => {
                if (err) console.log(err);
                if (result.length > 0) {
                    connection.query(`SELECT DISTINCT * FROM FlightDetails WHERE SECTOR= '${Destination}'`, (err, result) => {
                        if (err) console.log(err);
                        if (result.length > 0) {
                            connection.query(`SELECT DISTINCT * FROM FlightDetails WHERE DEPARTURE_DATE = '${Depture_Date}'`, (err, result) => {
                                if (err) console.log(err);
                                if (result.length === 0) {
                                    res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS(`for ${Depture_Date}`))
                                }
                            })
                        } else {
                            res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS(`from ${Destination}`))
                        }
                    })
                } else {
                    res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS(`form ${Origin}`))
                }
            })
        }
    })
})

module.exports.GetWeeklyFlightDetails = asyncHandler(async (req, res) => {
    let date = new Date();
    let currentDate = new Date()
    date.setDate(date.getDate() + 7);
    await connection.query(`SELECT DISTINCT * FROM FlightDetails WHERE DEPARTURE_DATE >= '${currentDate.toISOString().split('T')[0]}' AND DEPARTURE_DATE <= '${date.toISOString().split('T')[0]}'`, (err, result) => {
        if (err) console.log(err);
        if (result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS('for this Week'))
        }
    })
})

module.exports.mailSendAdmin = asyncHandler(async (req, res) => {
    let mailTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "1999soumallya@gmail.com",
            pass: "<Email app Passoword>"
        }
    })
    mailTransport.sendMail({
        from: "1999soumallya@gmail.com",
        to: `${req.body.email}`,
        subject: "This is my testing mail",
        text: "Enter your message here"
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send('Mail Send Success Full')
        }
    })
})

module.exports.PreBookingFlight = asyncHandler(async (req, res) => {
    const { emailid, flightDate, name, phoneNo, Adult, Child, Infant } = req.body
    const PreBookingFlight = await PreBookingFlightModel.create({ emailid, flightDate, name, phoneNo, Adult, Child, Infant })
    if (PreBookingFlight) {
        res.status(200).send("Your details has been saved")
    } else {
        res.status(404).send("Details Upload Failed")
    }
})