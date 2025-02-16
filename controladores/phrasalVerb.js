const validator = require("validator");
const PhrasalVerb = require("../modelos/PhrasalVerb");

const addPhrasalVerb = async (req, res) => {
  let params = req.body;

  try {
    let validate_phrase =
      !validator.isEmpty(params.phrase) &&
      validator.isLength(params.phrase, { min: 2, max: undefined });

    let validate_meaning =
      !validator.isEmpty(params.meaning) &&
      validator.isLength(params.meaning, { min: 2, max: undefined });

    let validate_synonym =
      !validator.isEmpty(params.synonym) &&
      validator.isLength(params.synonym, { min: 2, max: undefined });

    if (!validate_phrase || !validate_meaning || !validate_synonym) {
      throw new Error("No se ha validado la informacion");
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }

  const phrasalVerb = new PhrasalVerb(params);
  try {
    const savePhrasalVerb = await phrasalVerb.save();
    return res.status(200).json({
      status: "success",
      phrasalVerb: savePhrasalVerb,
      message: "Phrasal Verb was add succes",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Phrasal Verb wasn't save",
    });
  }
};

module.exports = {};
