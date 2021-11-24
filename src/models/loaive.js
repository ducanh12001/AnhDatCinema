const { Sequelize, DataTypes } = require('sequelize');

const db = require('../config/database/database.js');

const loaive = db.define('loaive',{
    Gia : {
        type: Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = loaive