const express = require("express");
const router = express.Router();
const FollowController = require("../controllers/follow");

//Definir rutas
router.get("/follow-test", FollowController.followTest);

//Exportar ruter
module.exports = router;
