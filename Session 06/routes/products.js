const express = require("express");
const router = express.Router();
const sequelize = require("../config/db");

// Get all products
router.get("/", async (req, res) => {
	try {
		const products = await sequelize.models.products.findAll();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Create a new product
router.post("/", async (req, res) => {
	try {
		const product = await sequelize.models.products.create(req.body);
		// send sucess message with product
		res.status(201).json({ message: "Product created", product });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Update a product by id
router.put("/:id", async (req, res) => {
	return await sequelize.models.products
		.findByPk(req.params.id)
		.then((product) => {
			if (!product) {
				return res
					.status(404)
					.json({ code: 404, message: "Product not found" });
			}
			return product
				.update(req.body)
				.then((updatedProduct) =>
					res.json({ message: "Product updated", data: updatedProduct })
				)
				.catch((err) =>
					res
						.status(500)
						.json({ code: 500, message: "Internal server error" + err })
				);
		})
		.catch((err) =>
			res
				.status(500)
				.json({ code: 500, message: "Internal server error" + err })
		);
});

// Delete a product by id
router.delete("/:id", async (req, res) => {
	return await sequelize.models.products
		.findByPk(req.params.id)
		.then((product) => {
			if (!product) {
				return res
					.status(404)
					.json({ code: 404, message: "Product not found" });
			}
			return product
				.destroy()
				.then(() => res.json({ message: "Product deleted" }))
				.catch((err) =>
					res
						.status(500)
						.json({ code: 500, message: "Internal server error" + err })
				);
		})
		.catch((err) =>
			res
				.status(500)
				.json({ code: 500, message: "Internal server error" + err })
		);
});

module.exports = router;
