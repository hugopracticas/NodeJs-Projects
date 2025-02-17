const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

//Definir rutas
router.get("/user-test", UserController.userTest);

router.post("/register", UserController.register);

//Exportar ruter
module.exports = router;
