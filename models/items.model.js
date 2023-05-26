const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("items", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false

    },
    name :{
      type: DataTypes.STRING,
      uniqueOne: { type: DataTypes.STRING,  unique: 'name' },
      allowNull: true,
    },
    idObject :{
        type: DataTypes.STRING,
        uniqueTwo: { type: DataTypes.STRING,  unique: 'idObject' },
        allowNull: false,
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
        createdAt:false,
      updatedAt: false,
      freezeTableName: true
    });

  return Items;
};