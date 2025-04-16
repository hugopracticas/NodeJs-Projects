const validator = require("validator");
const Articulo = require("../modelos/Articulo");

const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: "Soy una accion de prueba",
  });
};

const createArticle = async (req, res) => {
  let params = req.body;

  try {
    let validate_title =
      !validator.isEmpty(params.titulo) &&
      validator.isLength(params.titulo, { min: 2, max: 100 });
    let validate_content =
      !validator.isEmpty(params.contenido) &&
      validator.isLength(params.contenido, { min: 2, max: undefined });
    let validate_date =
      !validator.isEmpty(params.fecha) &&
      validator.isDate(new Date(params.fecha));

    if (!validate_title || !validate_content || !validate_date) {
      throw new Error("No se ha validado la informacion");
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }

  const articulo = new Articulo(params);

  try {
    const saveArticulo = await articulo.save();
    return res.status(200).json({
      status: "success",
      verb: saveArticulo,
      message: "Articulo creado con exito",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Articulo no creado",
    });
  }
};

module.exports = {
  prueba,
  createArticle,
};
