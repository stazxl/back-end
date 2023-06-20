const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
const TypesAbo = sequelize.define('TypesAbo', {
  
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  engagement: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CasMédicaux: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  déménagement: {
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

return TypesAbo;
};
