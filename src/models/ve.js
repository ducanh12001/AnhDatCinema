const { Sequelize, DataTypes } = require('sequelize');
const db =require('../config/database/database');

const datcho = require('./datcho.js')
const loaive = require('./loaive.js')
const ve = db.define('ve', {
    MaVe: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    MaGhe: {
      type: Sequelize.STRING,
      allowNull: false
    },
  })
  

  ve.belongsTo(loaive)
  ve.belongsTo(datcho)
  module.exports = ve