const { DataTypes } = require("sequelize");

const NoteModel = (sequelize) =>
	sequelize.define("Notes", {
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		heading: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

module.exports = NoteModel;
