const express = require("express");
const router = express.Router();

const { prueba, createArticle } = require("../controladores/articulo");

//Rutas de prueba
router.get("/ruta-de-prueba", prueba);

//Ruta agregar Articulo
router.post("/crear-articulo", createArticle);

module.exports = router;
