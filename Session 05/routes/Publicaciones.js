const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");
const router = require("express").Router();
const Publicacion = require("../models/publicaciones");

// GET -> Obtener publicaciones
router.get("/", async (req, res) => {
	const publications = await Publicacion.findAll();
	res.send(publications);
});

// POST -> Añadir publicación
router.post("/", async (req, res) => {
	const publication = await Publicacion.create(req.body);
	res.send(`Publicación ${publication.id} agregada`);
});

// PATCH -> Editar publicación
router.patch("/", async (req, res) => {
	const publication = await Publicacion.update(req.body, {
		where: {
			id: req.body.id,
		},
	});
	res.send(`Publicación ${req.body.id} modificada`);
});

// DELETE -> Eliminar publicación
router.delete("/", async (req, res) => {
	const publication = await Publicacion.destroy({
		where: {
			id: req.body.id,
		},
	});
	res.send(`Publicación ${req.body.id} eliminada`);
});

module.exports = router;
