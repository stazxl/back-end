const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Carts = sequelize.define("carts", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    idObject :{
      type: DataTypes.STRING,
      uniqueOne: { type: DataTypes.STRING,  unique: 'idObject' },
      allowNull: false,
    },
    userId :{
      type: DataTypes.INTEGER,
      allowNull: true,
      },
    quantity:{
      type: DataTypes.INTEGER,
    },
    
  },
  {sequelize,
    createdAt:false,
    updatedAt: false,
    freezeTableName: true
  });

  return Carts;
};