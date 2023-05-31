const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,      
      primaryKey: true,
      allowNull: false
    },
    userId :{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    surname :{
      type: DataTypes.STRING,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    ville:{
      type: DataTypes.STRING,
      allowNull: false, 
    },
    name:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {sequelize,
    createdAt:false,
    updatedAt: false,
    freezeTableName: true
  });

  return Users;
};