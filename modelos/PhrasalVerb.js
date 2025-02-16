const { Schema, model } = require("mongoose");

const PhrasalVerbSchema = Schema({
  phrase: {
    type: String,
    require: true,
  },
  meaning: {
    type: String,
    require: true,
  },
  synonym: {
    type: String,
    require: false,
  },
});

module.exports = model("PhrasalVerb", PhrasalVerbSchema, "phrasalVerb");
