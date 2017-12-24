require('dotenv').config()

var db = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    user: process.env.DV_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'getcraft'
}

module.exports = db;