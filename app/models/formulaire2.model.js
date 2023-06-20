const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
const Formulaire2 = sequelize.define('Formulaire2', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numeroTelephone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  intitulePoste: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomEntreprise: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codePostal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  urlSiteWeb: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombreAbonnes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nouveauxInscrisMois: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
return Formulaire2;
};
