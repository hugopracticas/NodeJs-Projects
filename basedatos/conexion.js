// const mongoose = require("mongoose");
// require("dotenv").config();
// const text = require("../text/textFile.json");

// const conexion = async () => {
  
//   try {
//     await mongoose.connect(`mongodb+srv://hugoloyolamaya:Azul1590.@cluster0.96adb.mongodb.net/verbs?retryWrites=true&w=majority&appName=Cluster0`, {});
//     console.log(`${text.dataBase} ${url.substring(url.length - 8)}`);
//   } catch (error) {
//     console.log(error);
//     throw new Error(`${text.errorConectionDB}`);
//   }
// };

// module.exports = {
//   conexion,
// };

const mongoose = require("mongoose");
require("dotenv").config();
const text = require("../text/textFile.json");

const conexion = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hugoloyolamaya:88AD6rf5tUXz3Pob@cluster0.96adb.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`${text.dataBase} conectada correctamente 🚀`);
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
    throw new Error(`${text.errorConectionDB}`);
  }
};

module.exports = { conexion };


//Validadores

//Authenticacion, revisar

//Que es una BD de tipo cache ?
//Memoria cahce tipo redis
//ventajas, desventajas
//Memorias de cache
//colas, que son ?


