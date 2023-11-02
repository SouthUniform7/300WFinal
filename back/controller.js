const axios = require('axios');
const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development']);

const getWeatherData = async (req, res) => {
    try {
        const response = await axios.get('https://api.weather.gov/points/40.7934,-77.86');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data', error: error.message });
    }
};

const getRootResponse = (req, res) => {
    res.send("Kept you waiting, huh?");
};

// Retrieve all bus data
const getAllBuses = async (req, res) => {
    try {
        const buses = await knex.select('*').from('bus');
        res.json(buses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bus data', error: error.message });
    }
};

// Retrieve bus data based on busID
const getBusById = async (req, res) => {
    try {
        const busID = req.query.busID; // assuming you're passing busID as a query param
        const bus = await knex('bus').where('busID', busID);
        res.json(bus);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bus data', error: error.message });
    }
};


module.exports = {
    getWeatherData,
    getRootResponse,
    getAllBuses,
    getBusById
};
