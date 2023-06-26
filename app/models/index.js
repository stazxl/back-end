const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const sequelize = new Sequelize('eshop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' 
});
const db = {}

db.Sequelize = DataTypes;
db.sequelize = sequelize;

db.items = require("./items.model.js")(sequelize,DataTypes)
db.users = require("./users.model.js")(sequelize,DataTypes)
db.reviews = require("./reviews.model.js")(sequelize,DataTypes)
db.carts = require("./carts.model.js")(sequelize,DataTypes)
db.formulaire2 = require("./formulaire2.model.js")(sequelize,DataTypes)
db.typesAbo = require("./typesAbo.model.js")(sequelize,DataTypes)

db.typesAbo.belongsTo(db.formulaire2,{source:'idFormulaire'});
db.formulaire2.hasMany(db.typesAbo, { foreignKey: 'uid' });


module.exports = db;