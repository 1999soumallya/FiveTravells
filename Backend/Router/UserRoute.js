const { AirportDetails, GetFlightDetails } = require('../Controller/UserController')

const router = require('express').Router()

router.route('/').get(AirportDetails)

router.route('/flightdetails').post(GetFlightDetails)

module.exports = router