"use strict";

const sequelize = require("../config/db");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("users", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: Sequelize.STRING,
			lastName: Sequelize.STRING,
			mothersMaidenName: Sequelize.STRING,
			userType: {
				type: Sequelize.INTEGER,
				references: {
					model: "roles",
					key: "id",
				},
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			password: Sequelize.STRING,
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("users");
	},
};
