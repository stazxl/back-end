const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define("reviews", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nbSinistre :{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name :{
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    adresse :{
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageURL :{
        type: DataTypes.STRING,
        allowNull: false,
    },
        nbABO:{
      type: DataTypes.INTEGER,
      allowNull: false,   
    },  
    tarifABO:{
        type: DataTypes.INTEGER,
        allowNull: false,   
      }, 
      nbImpayé:{
        type: DataTypes.INTEGER,
        allowNull: false,   
      },       
      MOYparMois:{
        type: DataTypes.INTEGER,
        allowNull: false,   
      },
      MOYparAN:{
        type: DataTypes.INTEGER,
        allowNull: false,   
      },        
      tel:{
        type: DataTypes.INTEGER,
        allowNull: false,   
      },    
      ville:{
        type: DataTypes.STRING,
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