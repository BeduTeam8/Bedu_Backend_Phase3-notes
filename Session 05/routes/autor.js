const { Sequelize, DataTypes, Op } = require("sequelize");
const router = require("express").Router();
const autor = require("../models/autor");

// GET -> Obtener autores
router.get("/", async (req, res) => {
	const autores = await Autor.findAll();
	res.send(autores);
});

// POST -> Añadir autor
router.post("/", async (req, res) => {
	const autor = await Autor.create(req.body);
	res.send(`Autor ${autor.id} agregado`);
});

// PATCH -> Editar autor
router.patch("/", async (req, res) => {
	const autor = await Autor.update(req.body, {
		where: {
			id: req.body.id,
		},
	});
	res.send(`Autor ${req.body.id} modificado`);
});

// DELETE -> Eliminar autor
router.delete("/", async (req, res) => {
	const autor = await Autor.destroy({
		where: {
			id: req.body.id,
		},
	});
	res.send(`Autor ${req.body.id} eliminado`);
});

module.exports = router;
