const express = require("express");
const router = express.Router();
const sequelize = require("../config/db");

// Get all roles
router.get("/", async (req, res) => {
	return await sequelize.models.roles
		.findAndCountAll()
		.then((data) => res.json(data))
		.catch((err) =>
			res
				.status(500)
				.json({ code: 500, message: "Internal server error" + err })
		);
});

// Creating a new role
router.post("/", async (req, res) => {
	const { body } = req;
	const role = await sequelize.models.roles.create({
		name: body.name,
	});
	await role.save();
	// send message user created succesfully
	return res
		.status(201)
		.json({ message: "Role created successfully", data: role });
});

// Update a role by id
router.put("/:id", async (req, res) => {
	const {
		body,
		params: { id },
	} = req;
	const role = await sequelize.models.roles.findByPk(id);
	if (!role) {
		return res.status(404).json({ code: 404, message: "Role not found" });
	}
	const updatedRole = await role.update({
		name: body.name,
	});
	return res.json({ data: updatedRole });
});

// Delete a role by id
router.delete("/:id", async (req, res) => {
	const {
		params: { id },
	} = req;
	const role = await sequelize.models.roles.findByPk(id);
	if (!role) {
		return res.status(404).json({ code: 404, message: "Role not found" });
	}
	await role.destroy();
	return res.json();
});

module.exports = router;
