const express = require("express");
const router = express.Router();
const PublicationController = require("../controllers/publication");

//Definir rutas
router.get("/publication-test", PublicationController.publicationTest);

//Exportar ruter
module.exports = router;
