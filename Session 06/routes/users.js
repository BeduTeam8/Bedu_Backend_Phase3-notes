const express = require("express");
const router = express.Router();
const sequelize = require("../config/db");

// Get all users
router.get("/", async (req, res) => {
	return await sequelize.models.users
		.findAndCountAll()
		.then((data) => res.json(data))
		.catch((err) =>
			res
				.status(500)
				.json({ code: 500, message: "Internal server error - " + err })
		);
});

// Creating a new user
router.post("/", async (req, res) => {
	const { body } = req;
	return await sequelize.models.users
		.create(req.body)
		.then((data) => res.status(201).json(data))
		.catch((err) =>
			res
				.status(500)
				.json({ code: 500, message: "Internal server error" + err })
		);
});

// Update a user by id
router.put("/:id", async (req, res) => {
	const {
		body,
		params: { id },
	} = req;
	const user = await sequelize.models.users.findByPk(id);
	if (!user) {
		return res.status(404).json({ code: 404, message: "User not found" });
	}
	const updatedUser = await user.update(req.body);
	return res.json({ data: updatedUser });
});

// Delete a user by id
router.delete("/:id", async (req, res) => {
	return await sequelize.models.users
		.findByPk(req.params.id)
		.then((user) => {
			if (!user) {
				return res.status(404).json({ code: 404, message: "User not found" });
			}
			return user
				.destroy()
				.then(() =>
					res
						.json({ message: "User deleted successfully", user })
						.catch((err) =>
							res
								.status(500)
								.json({ code: 500, message: "Internal server error" + err })
						)
				);
		})
		.catch((err) =>
			res
				.status(500)
				.json({ code: 500, message: "Internal server error" + err })
		);
});

module.exports = router;
