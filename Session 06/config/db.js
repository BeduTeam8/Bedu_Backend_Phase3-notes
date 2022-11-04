// db.js
const { Sequelize } = require("sequelize");

// Importing models
const Product = require("../models/products");
const Review = require("../models/reviews");
const User = require("../models/users");
const Order = require("../models/orders");
const Role = require("../models/Roles");

// Database connection
const sequelize = new Sequelize("session6", "root", "1012893", {
	host: "localhost",
	dialect: "mysql",
	port: "3306",
	logging: false,
});

// Getting models
const models = [Product, Review, User, Order, Role];

// Registering models into Sequelize
for (let model of models) {
	model(sequelize);
}

// Configuring relations
const { products, reviews, orders, users, roles } = sequelize.models;

reviews.belongsTo(products); // Relation one-to-one in reviews table

// user has a one to one relation
roles.hasMany(users);

//oders belongs to user
orders.belongsTo(users);

module.exports = sequelize;
