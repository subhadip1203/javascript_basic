
const fs = require('fs');

module.exports = {
    username: 'user',
    password: 'password',
    database: 'my_pg_db',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  
};