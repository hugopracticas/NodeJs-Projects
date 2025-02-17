const express = require("express");
const cors = require("cors");
const { connection } = require("./database/connection");
require("dotenv").config();
const { index } = require("./text/textFile.json");

//Welcome message
console.log(`${index.welcome}`);

//DataBase connection
connection();

//Node.js Server
const app = express();
const port = process.env.PORT || index.port;

//Cors config
app.use(cors());

//Convert data from Body to js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Config Routes
//Falta

//Set servert to get http petitions
app.listen(port, () => {
  console.log(`${index.serverRuning} ${port}`);
});
