const express = require("express");
const router = express.Router();

// GET -> Obtener notas
router.use("/notes", require("./notes"));
router.use("/blog", require("./Publicaciones.js"));
router.use("/author", require("./autor.js"));

module.exports = router;
