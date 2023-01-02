const asyncHandler = require('express-async-handler')
const { ConnectMysql } = require('../Config/Connection')
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
    await connection.query(`SELECT DISTINCT * FROM flightdetails WHERE DEPARTURE_DATE >= '${currentDate.toISOString().split('T')[0]}' AND DEPARTURE_DATE <= '${date.toISOString().split('T')[0]}'`, (err, result) => {
        if (err) console.log(err);
        if (result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(404).send(Constants.CommonQueryMessage.NO_FLIGHT_DETAILS('for this Week'))
        }
    })
})