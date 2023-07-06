const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Settings = sequelize.define("settings", {
    engageOuNon:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    début_CasMedicaux:{
      type: DataTypes.INTEGER,   
      allowNull: false
    },
    début_demenagement :{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    début_lignesImpayeesMois:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
   début_suspensionPro :{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dureé_CasMedicaux:{
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    dureé_demenagement :{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dureé_lignesImpayeesMois:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dureé_suspensionPro:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {sequelize,
    createdAt:false,
    updatedAt: false,
    freezeTableName: true
  });

  return Settings;
};
