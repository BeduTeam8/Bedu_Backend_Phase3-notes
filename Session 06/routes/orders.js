const express = require("express");
const router = express.Router();
const sequelize = require("../config/db");

// Get all orders
router.get("/", async (req, res) => {
	const orders = await sequelize.models.orders.findAndCountAll();
	return res.status(200).json({ data: orders });
});

// Creating a new order
router.post("/", async (req, res) => {
	const { body } = req;
	const order = await sequelize.models.orders.create({
		userId: body.userId,
		productId: body.productId,
		quantity: body.quantity,
		status: body.status,
	});
	await order.save();
	return res.status(201).json({ data: order });
});

// Update an order by id
router.put("/:id", async (req, res) => {
	const {
		body,
		params: { id },
	} = req;
	const order = await sequelize.models.orders.findByPk(id);
	if (!order) {
		return res.status(404).json({ code: 404, message: "Order not found" });
	}
	const updatedOrder = await order.update({
		userId: body.userId,
		productId: body.productId,
		quantity: body.quantity,
		status: body.status,
	});
	return res.json({ data: updatedOrder });
});

// Delete an order by id
router.delete("/:id", async (req, res) => {
	const {
		params: { id },
	} = req;
	const order = await sequelize.models.orders.findByPk(id);
	if (!order) {
		return res.status(404).json({ code: 404, message: "Order not found" });
	}
	await order.destroy();
	return res.json();
});

module.exports = router;
