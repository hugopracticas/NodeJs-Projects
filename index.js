const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");

//1.- Inicializar app
console.log("App de node arrancada");

//2.- Conectar a la BD
conexion();

//3.- Crear Servidor de Node
const app = express();
const puerto = 3900;

//4.- Configurar cors
app.use(cors());

//5.- Leer y convertir el body, a un Objeto de js
app.use(express.json());

//6.- Crear rutas
const rutas_articulo = require("./rutas/articulo");

//Cargar las rutas
app.use("/api", rutas_articulo);

//Ruta de prueba
{
  /*app.get("/probando", (req, res) => {
  console.log("Se ha ejecutado el endpoint probando");

  return res.status(200).json([
    {
      curso: "Master en React",
      autor: "Hugo Maya",
      url: "hugoloyola.es",
    },
  ]);
});*/
}

//7.- Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
