//Dependencias
const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");

//Welcome Message
console.log(`Api Node social network started`);
//Conexion a BD
connection();

//Crear servidor node
const app = express();
const port = 3900;

//Configurar cors
app.use(cors());

//Convertir los datos del body objetos js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cargar conf de rutas
const UserRoutes = require("./routes/user");
const PublicationRoutes = require("./routes/publication");
const FollowRoutes = require("./routes/follow");

app.use("/api/user", UserRoutes);
app.use("/api/publication", PublicationRoutes);
app.use("/api/follow", FollowRoutes);

app.get("/ruta-prueba", (req, res) => {
  return res.status(200).json({
    id: 1,
    nombre: "Hugo",
    web: "hugo.com",
  });
});

//Poner servidor a escuchar peticiones http
app.listen(port, () => {
  console.log(`Servidor de node corriendo en el puerto ${port}`);
});
