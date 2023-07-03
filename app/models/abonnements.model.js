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
},

{sequelize,
  freezeTableName: true
});

return Abonnements;
};
