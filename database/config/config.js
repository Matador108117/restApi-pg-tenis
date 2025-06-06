require('dotenv').config();
const fs = require('fs');

module.exports =
{
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
  "test": {
    "url": process.env.TEST_DATABASE_URL,
    "dialect": "postgres"
  },
  "production": {
    "url": process.env.DATABASE_URL,
    "dialect": "postgres"
  }
} ;
