const Sequelize = require('sequelize');

const sequelize  = require('../util/database');

const User = sequelize.define('user',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement :true,
    allowNull:false,
    primaryKey:true
  }, 
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone :{  
    type: Sequelize.STRING,
    allowNull: false,
  }
},
{
    timestamps: true,
    underscored: true
})

module.exports = User;
