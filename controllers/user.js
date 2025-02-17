//Acciones de prueba

const userTest = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde: controllers/user.js",
  });
};

//Registro de usuarios
const register = (req, res) => {
  //Recoger datos de la peticion

  //Comprobar que me llegan bien (validacion)

  //Control de usuario duplicado

  //Cifrar la contraseña

  //Guardar usuario en la BD

  //Regresar resultados
  return res.status(200).json({
    message: "Action to register user",
  });
};

module.exports = {
  userTest,
  register,
};
