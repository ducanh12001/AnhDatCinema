const { Sequelize, DataTypes } = require('sequelize');
const db =require('../config/database/database');

const phim = db.define('phim', {
    Ten: {
      type: Sequelize.STRING,
      allowNull: false
    },
    NgayCongChieu: {
      type: Sequelize.DATE,
      allowNull: false
    },
    Poster: {
      type: Sequelize.STRING,
      allowNull: false
    },
    TraiLers: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ThoiLuong: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    DaoDien: {
      type: Sequelize.STRING,
      allowNull: false
    },
    DienVien: {
      type: Sequelize.STRING,
      allowNull: false
    },
    TheLoai: {
      type: Sequelize.STRING,
      allowNull: false
    },
    NoiDung :{
      type:Sequelize.STRING,
      allowNull:false
    },
    NhaSanXuat:{
      type:Sequelize.STRING,
      allowNull:false
    }
  });
 
  module.exports = phim