const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
const Abonnements = sequelize.define('abonnements', {
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  engagement: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CasMedicaux: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  demenagement: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  suspensionPro: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lignesImpayeesMois: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  freezeTableName: true
});

return Abonnements;
};
