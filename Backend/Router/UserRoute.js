const { AirportDetails, GetFlightDetails, GetWeeklyFlightDetails, PreBookingFlight, GetFlightForGroupFlightBooking } = require('../Controller/UserController')

const router = require('express').Router()

router.route('/').get(AirportDetails)

router.route('/flightdetails').post(GetFlightDetails)

router.route('/weekflightdetails').get(GetWeeklyFlightDetails)

router.route('/preflightbooking').post(PreBookingFlight)

router.route('/flightforgroupflightbooking').post(GetFlightForGroupFlightBooking)

module.exports = router