const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) =>
	sequelize.define(
		"orders",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			userID: {
				type: DataTypes.INTEGER,
				references: {
					model: "users",
					key: "id",
				},
				onDelete: "CASCADE",
			},
			productID: {
				type: DataTypes.INTEGER,
				references: {
					model: "products",
					key: "id",
				},
				onDelete: "CASCADE",
			},
			quantity: DataTypes.INTEGER,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			hooks: {
				beforeCreate: function (order, options) {
					order.createdAt = new Date();
					order.updatedAt = new Date();
				},
				beforeUpdate: function (order, options) {
					order.updatedAt = new Date();
				},
			},
		}
	);
