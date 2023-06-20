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
db.TypesAbo = require("./TypesAbo.model.js")(sequelize,DataTypes)
module.exports = db;