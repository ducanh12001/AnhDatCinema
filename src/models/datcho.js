const { Sequelize, DataTypes } = require('sequelize');
const db =require('../config/database/database');
const suatchieu = require('./suatchieu');

const user = require ('./user');

const datcho =  db.define('datcho', {
    MaDatCho: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    ThoiDiemDatVe: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    TongTien: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  
  })

datcho.belongsTo(user);
datcho.belongsTo(suatchieu);


module.exports = datcho;