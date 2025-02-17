//Registro de usuarios
const register = (req, res) => {
  return res.status(200).json({
    message: "Action to register user",
  });
};

module.exports = {
  register,
};
