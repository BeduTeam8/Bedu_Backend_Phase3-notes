const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) =>
	sequelize.define(
		"roles",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: DataTypes.STRING,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			hooks: {
				beforeCreate: function (roles, options) {
					roles.createdAt = new Date();
					roles.updatedAt = new Date();
				},
				beforeUpdate: function (roles, options) {
					roles.updatedAt = new Date();
				},
			},
		}
	);
