import { MongoClient } from "mongodb";
import "dotenv/config";
import mongoose from "mongoose";

class dbClient {
  // constructor() {
  //   const url = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Cluster0`;
  //   this.client = new MongoClient(url);
  //   this.conectarDB();
  // }

  //Opcion con monggose
  constructor() {
    this.conectarBaseDatos();
  }
  async conectarBaseDatos() {
    const url = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/Cluster0?retryWrites=true&w=majority`;
    await mongoose.connect(url);
    console.log("Conectado a la BD");
  }

  // async conectarDB() {
  //   try {
  //     await this.client.connect();
  //     this.db = this.client.db("adopcion");
  //     console.log("Conectado al servidor de BS");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async cerrarConexion() {
    try {
      await mongoose.disconnect();
      console.log("Coneccion a la Bd Cerrada");
    } catch (error) {
      console.log("Error al cerrar la conexion", error);
    }
  }
}

export default new dbClient();
