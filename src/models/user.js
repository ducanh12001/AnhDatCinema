const { Sequelize, DataTypes } = require('sequelize');
const db =require('../config/database/database');

const user = db.define('user',{
  Email: {
  type: Sequelize.STRING,
  allowNull: false,
  unique: true
},
Password: {
  type: Sequelize.STRING,
  allowNull: false
},
Name: {
  type: Sequelize.STRING,
  allowNull: false
},
Phone: {
  type: Sequelize.INTEGER,
  allowNull: false
},
UserType: {
  type: Sequelize.INTEGER,
  allowNull: false
},
Birth: {
  type: Sequelize.DATE,
  allowNull: true
},
Verify: {
  type: Sequelize.INTEGER,
  allowNull: true
},
Sex :{
  type: Sequelize.STRING,
  allowNull:false
},
Address :{
  type:Sequelize.STRING,
  allowNull:true
},
UserToken:{
  type:Sequelize.STRING,
  allowNull:false
}
})



module.exports = user;