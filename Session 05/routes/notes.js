const express = require("express");
const router = express.Router();
const sequelize = require("../config/db");

// GET -> Obtener notas
router.get("/", async (req, res) => {
	return await sequelize.models.Notes.findAll()
		.then((data) => res.json(data))
		.catch((err) => res.json({ message: "Error", data: err }));
});
// POST -> Añadir nota
router.post("/", async (req, res) => {
	return await sequelize.models.Notes.create(req.body)
		.then((data) => res.json({ message: "Nota agregada", data: data }))
		.catch((err) => res.json({ message: "Error", data: err }));
});

// PATCH -> Editar nota
router.put("/:id", async (req, res) => {
	// check if note exists
	const note = await sequelize.models.Notes.findOne({
		where: { id: req.params.id },
	});
	if (!note) {
		return res.status(404).json({ message: "Nota no encontrada", data: {} });
	}
	// update note
	return await sequelize.models.Notes.update(req.body, {
		where: { id: req.params.id },
	})
		.then((data) => res.json({ message: "Nota actualizada", data: note }))
		.catch((err) => res.json({ message: "Error", data: err }));
});

// DELETE -> Eliminar nota
router.delete("/:id", async (req, res) => {
	// check if note exists
	const note = await sequelize.models.Notes.findOne({
		where: { id: req.params.id },
	});
	if (!note) {
		return res.status(404).json({ message: "Nota no encontrada", data: {} });
	}
	// delete note
	return await sequelize.models.Notes.destroy({
		where: { id: req.params.id },
	})
		.then((data) => res.json({ message: "Nota eliminada", data: note }))
		.catch((err) => res.json({ message: "Error", data: err }));
});
module.exports = router;
