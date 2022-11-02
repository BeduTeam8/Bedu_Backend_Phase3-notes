// create table with sequelize
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = require("../config/db");

const Autor = require("./autor");

const Publicacion = sequelize.define(
	"Publicacion",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		titulo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		contenido: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Categoria: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Autor: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

// // publications belongs to autor
// Publicacion.belongsTo(Autor);

// create table
sequelize
	.sync()
	.then(() => {
		console.log("Tablas creadas");
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = Publicacion;
