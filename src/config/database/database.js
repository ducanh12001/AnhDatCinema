const mysql = require('mysql');
const ulti = require('util');
const { Sequelize }= require('sequelize');

const db = new Sequelize('mydb','root','12345678',{
    host:'localhost',
    dialect:'mysql'
});
db.authenticate().then(()=>console.log('connected database completed'));

module.exports = db;
