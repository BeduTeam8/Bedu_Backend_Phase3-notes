const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

const Publicacion = require("./publicaciones");

const Autor = sequelize.define("Autor", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	apellido: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Img: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Bio: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

// // author has many publications
// Autor.hasMany(Publicacion);

// create table
sequelize
	.sync()
	.then(() => {
		console.log("Tablas creadas");
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = Autor;
