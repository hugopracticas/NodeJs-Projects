const express = require("express");
const router = express.Router();

const VerbController = require("../controladores/verb");

router.get("/ruta-de-prueba", VerbController.prueba);
router.get("/ruta-de-prueba-curso", VerbController.curso);

//Rutas de mi Proyecto
router.post("/addVerb", VerbController.addVerb);

{
  /**
Podemos establecer que se reciba un parametro
por medio de la url, en este caso al agregar un 
signo de interrogacion, significa que es opcional
el parametro
*/
}
router.get("/verbList/:some?", VerbController.getVerbs);
router.get("/verb/:id", VerbController.getVerbById);
router.delete("/delete/:id", VerbController.deletVerb);
router.put("/update/:id", VerbController.editVerb);

module.exports = router;
