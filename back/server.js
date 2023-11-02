const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');
require('dotenv').config();
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);



const app = express();
app.locals.knex = knex;
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

process.on('exit', (code) => {
    knex.destroy();
    console.log('Closing db connection and exiting with code:', code);
});

