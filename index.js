const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");

//Inicializar app
console.log("App de node arrancada");

//Conectar a la BD
conexion();

//Crear servidor de Node
const app = express();
const puerto = process.env.PORT || 3000;

//Configurar cors
app.use(cors());

//Convertir body a objeto js

//Crear rutas
app.get("/probando", (req, res) => {
  console.log("Se ha ejecutado el endpoint probando");

  return res.status(200).send({});
});

//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
  console.log(`Servidor corriendo en puerto ${puerto}`);
});
