const { Sequelize, DataTypes } = require('sequelize');
const db =require('../config/database/database');

const cumrap = require('./cumrap')
const rap = db.define("rap", {
  TenRap: {
    type: Sequelize.UUID,
    allowNull: false

  },
  LoaiRap: {
    type: Sequelize.STRING,
    allowNull: false
  },
  //MaCum
  KTNgang: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  KTDoc: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

})
rap.belongsTo(cumrap);

module.exports = rap