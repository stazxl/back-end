const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define("reviews", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    idObject :{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commentary :{
      type: DataTypes.STRING,
    },
    notes:{
      type: DataTypes.INTEGER,
      allowNull: false,   
    },    
  },
  {sequelize,
      createdAt:false,
      updatedAt: false,
      freezeTableName: true
  });

  return Reviews;
};
   