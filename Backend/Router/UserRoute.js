const { AirportDetails, GetFlightDetails, GetWeeklyFlightDetails } = require('../Controller/UserController')

const router = require('express').Router()

router.route('/').get(AirportDetails)

router.route('/flightdetails').post(GetFlightDetails)

router.route('/weekflightdetails').get(GetWeeklyFlightDetails)

module.exports = router