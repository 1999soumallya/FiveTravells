const { AirportDetails } = require('../Controller/UserController')

const router = require('express').Router()

router.route('/').get(AirportDetails)

module.exports = router