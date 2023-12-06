const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Pohonmangga90',
    database: 'stuntify'
});

module.exports = dbPool.promise();