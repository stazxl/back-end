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
db.typesAbo = require("./typesAbo.model.js")(sequelize,DataTypes)

db.typesAbo.belongsTo(db.formulaires,{source:'idFormulaire'});
db.formulaires.hasMany(db.typesAbo, { foreignKey: 'uid' });


module.exports = db;