// database.js
const { Sequelize } = require("sequelize");

// Exporting models
const NoteModel = require("../models/notes");

// Database connection
const sequelize = new Sequelize("sesion5", "root", "1012893", {
	host: "localhost",
	dialect: "mysql",
	logging: false,
});

// Adding models
const models = [NoteModel];

// Registering models to Sequelize
for (let model of models) {
	model(sequelize);
}

module.exports = sequelize;
