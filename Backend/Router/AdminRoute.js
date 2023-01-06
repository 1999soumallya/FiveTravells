const { GetAllFlightData, AirportDetails } = require('../Controller/AdminController');
const { validateToken } = require('../Middleware/tokenValidation')
const router = require('express').Router();

router.route('/').get(validateToken, GetAllFlightData)

router.route('/airportdetails').get(validateToken, AirportDetails)

module.exports = router