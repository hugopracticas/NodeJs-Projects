const validator = require("validator");
const Verb = require("../modelos/Verb");

{
  /**Rutas de prueba */
}
const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: "Soy una accion de prueba en mi controlador de Verbos",
  });
};

const curso = (req, res) => {
  return res.status(200).send([
    {
      curso: "Master en React",
    },
    {
      curso: "Master en JS",
    },
  ]);
};
{
  /**Rutas de prueba */
}

//Rutas de mi proyecto api ingles

const addVerb = async (req, res) => {
  //Recoger parametros por post a guardar
  let params = req.body;
  //Validar datos
  try {
    let validate_word =
      !validator.isEmpty(params.word) &&
      validator.isLength(params.word, { min: 2, max: undefined });

    let validate_past =
      !validator.isEmpty(params.past) &&
      validator.isLength(params.past, { min: 2, max: undefined });

    let validate_past_participle = !validator.isEmpty(params.pastParticiple);
    let validate_meaning = !validator.isEmpty(params.meaning);
    let validate_regular_irregular = !validator.isEmpty(
      params.regularIrregular
    );

    if (
      !validate_word ||
      !validate_past ||
      !validate_past_participle ||
      !validate_meaning ||
      !validate_regular_irregular
    ) {
      throw new Error("No se ha validado la informacion");
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }

  //Crear el objeto a guardar
  const verb = new Verb(params);
  //Asignar valores a objeto basado en el modelo
  //Guardar el articulo en la BD
  try {
    const saveVerb = await verb.save();
    return res.status(200).json({
      status: "success",
      verb: saveVerb,
      message: "Verb was add succes",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Verb wasn't save",
    });
  }
};

const getVerbs = async (req, res) => {
  try {
    let limit = 0;
    if (req.params.some) {
      limit = 3;
    }
    //TODO Revisar como poner orden
    let allVerbs = await Verb.find({}).limit(limit);

    if (!allVerbs || allVerbs.length === 0) {
      return res.status(400).json({
        status: "error",
        mensaje: "It wasn't found verbs to show",
      });
    }

    return res.status(200).send({
      status: "success",
      counter: allVerbs.length,
      allVerbs,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "It wasn't found verbs to show",
    });
  }
};

const getVerbById = async (req, res) => {
  try {
    let id = req.params.id;

    let verb = await Verb.findOne({ word: id });

    if (!verb) {
      return res.status(400).json({
        status: "error",
        mensaje: "It wasn't found a verb to show",
      });
    }

    return res.status(200).send({
      status: "success",
      verb,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "It wasn't found a verb to show",
    });
  }
};

const deletVerb = async (req, res) => {
  try {
    let id = req.params.id;
    let verb = await Verb.findByIdAndDelete(id);

    if (!verb) {
      return res.status(400).json({
        status: "error",
        mensaje: "It wasn't found a verb to delete",
      });
    }

    return res.status(200).send({
      status: "success",
      verb,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "It wasn't found a verb to delete",
    });
  }
};

const editVerb = async (req, res) => {
  //Validar datos
  let id = req.params.id;

  let params = req.body;
  try {
    let validate_word =
      !validator.isEmpty(params.word) &&
      validator.isLength(params.word, { min: 2, max: undefined });

    let validate_past =
      !validator.isEmpty(params.past) &&
      validator.isLength(params.past, { min: 2, max: undefined });

    let validate_past_participle = !validator.isEmpty(params.pastParticiple);
    let validate_meaning = !validator.isEmpty(params.meaning);
    let validate_regular_irregular = !validator.isEmpty(
      params.regularIrregular
    );

    if (
      !validate_word ||
      !validate_past ||
      !validate_past_participle ||
      !validate_meaning ||
      !validate_regular_irregular
    ) {
      throw new Error("No se ha validado la informacion");
    }
  } catch (error) {
    return res.status(404).json({
      status: "error",
      messagge: "Faltan datos por validar",
    });
  }

  let verb = await Verb.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  if (!verb) {
    return res.status(404).json({
      status: "error",
      messagge: "Faltan datos por validar",
    });
  }

  return res.status(200).send({
    status: "success",
    verb,
  });
};

module.exports = {
  prueba,
  curso,
  addVerb,
  getVerbs,
  getVerbById,
  deletVerb,
  editVerb,
};
