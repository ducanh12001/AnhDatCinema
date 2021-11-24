const { Sequelize, DataTypes } = require('sequelize');
const db =require('../config/database/database');

const cumrap = db.define("cumrap", {
    TenCum: {
      type: Sequelize.STRING,
      allowNull: false
    },
    DiaChi: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Maps: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  });

  module.exports = cumrap;