const express = require('express');
const controller = require('./controller.js');

const router = express.Router();

// Route for no extension
router.get('/', controller.getRootResponse);

// Add route for GET request to retrieve weather data
router.get('/weather', controller.getWeatherData);

//routes for database stuff
router.get('/buses', controller.getAllBuses);
router.get('/bus', controller.getBusById);

// Export router
module.exports = router;
