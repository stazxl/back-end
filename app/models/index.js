const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const sequelize = new Sequelize('eshop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' 
});
const db = {}

db.Sequelize = DataTypes;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize,DataTypes)
db.formulaires = require("./formulaires.model.js")(sequelize,DataTypes)
db.abonnements = require("./abonnements.model.js")(sequelize,DataTypes)

db.formulaires.hasMany(db.abonnements, { foreignKey:{name:'idFormulaire',type:DataTypes.STRING}, sourceKey:'idFormulaire' });
db.abonnements.belongsTo(db.formulaires,{targetKey:'idFormulaire',foreignKey: 'idFormulaire'});


module.exports = db;