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

//Leer y Convertir el body a objeto js
app.use(express.json()); //Recibir datos con content-type app/json
app.use(express.urlencoded({ extended: true })); //form-urlencode

//Crear rutas

const rutas_verb = require("./rutas/verb");

//Cargar rutas
app.use("/api", rutas_verb);
//app.use("/api/phrasalVerbs");
{
  /**Rutas de prueba hardcodeadas */
}
app.get("/probando", (req, res) => {
  console.log("Se ha ejecutado el endpoint probando");

  return res.status(200).send({});
});

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Empezando a crear una api</h1>");
});

//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
  console.log(`Servidor corriendo en puerto ${puerto}`);
});
