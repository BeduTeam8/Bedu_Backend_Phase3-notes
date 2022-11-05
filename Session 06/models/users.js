const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) =>
	sequelize.define(
		"users",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: DataTypes.STRING,
			lastName: DataTypes.STRING,
			mothersMaidenName: DataTypes.STRING,
			userType: {
				type: DataTypes.INTEGER,
				references: {
					model: "roles",
					key: "id",
				},
			},
			email: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			password: DataTypes.STRING,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			hooks: {
				beforeCreate: function (user, options) {
					user.createdAt = new Date();
					user.updatedAt = new Date();
				},
				beforeUpdate: function (user, options) {
					user.updatedAt = new Date();
				},
			},
		}
	);
