const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Pohonmangga90',
    database: process.env.DB_DATABASE || 'stuntify'
});

module.exports = dbPool.promise();
