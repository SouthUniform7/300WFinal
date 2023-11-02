require('dotenv').config();

const dbConfig = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
};

module.exports = {
  development: dbConfig,
  production: dbConfig
};
