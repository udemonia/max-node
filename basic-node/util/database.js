const mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root', 'Black1234567', {
    dialect: 'mysql', 
    host: 'localhost'
});

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'Black1234567',
//     database: 'node-complete'
// })

module.exports = sequelize;

// exporting a promise allows for us to use promises when working with the export - instead of callbacks