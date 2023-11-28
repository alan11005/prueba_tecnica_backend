require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    dbUser:  process.env.DB_USER,
    dbPassword:  process.env.DB_PASSWORD,
    dbHost:  process.env.DB_HOST,
    dbName:  process.env.DB_NAME,
    dbPort:  process.env.DB_PORT,
}

config.dbUrl = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = { config };
