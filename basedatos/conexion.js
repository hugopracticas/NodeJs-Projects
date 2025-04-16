const mongoose = require("mongoose");
require("dotenv").config();

const conexion = async () => {
  const url = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(url, {});
    console.log("Conectado correctamente a la BD");
  } catch (error) {
    console.log(error);
    throw new Error(`Error en la conexion`);
  }
};

module.exports = {
  conexion,
};

//mongodb+srv://hugoloyolamaya:<db_password>@blog.zuawe.mongodb.net/?retryWrites=true&w=majority&appName=blog
