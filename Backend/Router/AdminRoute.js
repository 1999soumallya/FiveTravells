const { GetAllFlightData } = require('../Controller/AdminController');
const { validateToken } = require('../Middleware/tokenValidation')
const router = require('express').Router();

router.route('/').get(validateToken, GetAllFlightData)

module.exports = router