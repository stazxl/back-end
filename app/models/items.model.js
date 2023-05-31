const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("items", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    idObject :{
      type: DataTypes.STRING,
      uniqueTwo: { type: DataTypes.STRING,  unique: 'idObject' },
      allowNull: false,
    },
    name :{
      type: DataTypes.STRING,
      uniqueOne: { type: DataTypes.STRING,  unique: 'name' },
      allowNull: true,
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    color:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    pictureURL:{
      type: DataTypes.STRING,    
      allowNull: false,     
    },
    tag:{
      type: DataTypes.STRING,
      defaultValue: "New"
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false,       
    },
    },
    {sequelize,
      freezeTableName: true
    });

  return Items;
};