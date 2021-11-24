const { Sequelize, DataTypes } = require('sequelize');
const db =require('../config/database/database');

const phim = require('./phim');
const rap = require('./rap');

const suatchieu = db.define('suatchieu', {
    ThoiDiemBatDau: {
      type: Sequelize.DATE,
      allowNull: true
    },
    ThoiDiemKetThuc: {
      type: Sequelize.DATE,
      allowNull: true
    }
  });
  
  suatchieu.belongsTo(phim);
  suatchieu.belongsTo(rap);
 
  module.exports = suatchieu;