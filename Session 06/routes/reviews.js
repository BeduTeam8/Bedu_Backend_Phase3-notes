const express = require("express");
const router = express.Router();
const sequelize = require("../config/db");

// Get all reviews
router.get("/", async (req, res) => {
	const reviews = await sequelize.models.reviews.findAndCountAll();
	return res.status(200).json({ data: reviews });
});

// Creating a new review
router.post("/", async (req, res) => {
	return await sequelize.models.reviews
		.create(req.body)
		.then((data) => res.status(201).json({ message: "review added", data }))
		// if productId is not valid send error message
		.catch((err) => res.status(400).json({ message: "invalid productId" }));
});

// Update a review by id
router.put("/:id", async (req, res) => {
	return await sequelize.models.reviews
		.findByPk(req.params.id)
		.then((review) => {
			if (!review) {
				return res.status(404).json({ message: "review not found" });
			}
			return (
				review
					.update(req.body)
					.then((data) =>
						res.status(200).json({ message: "review updated", data })
					)
					// if productId is not valid send error message
					.catch((err) =>
						res.status(400).json({ message: "invalid productId" })
					)
			);
		})
		.catch((err) => res.status(500).json({ message: "internal server error" }));
});

// Delete a review by id
router.delete("/:id", async (req, res) => {
	return await sequelize.models.reviews
		.findByPk(req.params.id)
		.then((review) => {
			if (!review) {
				return res.status(404).json({ message: "review not found" });
			}
			return review
				.destroy()
				.then((data) =>
					res.status(200).json({ message: "review deleted", data })
				)
				.catch((err) =>
					res.status(500).json({ message: "internal server error" })
				);
		})
		.catch((err) => res.status(500).json({ message: "internal server error" }));
});

module.exports = router;
