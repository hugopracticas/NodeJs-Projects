const { Schema, model } = require("mongoose");

const VerbSchema = Schema({
  word: {
    type: String,
    required: true,
  },
  past: {
    type: String,
    required: true,
  },
  pastParticiple: {
    type: String,
    required: true,
  },
  sinonim: {
    type: String,
    required: false,
  },
  meaning: {
    type: String,
    required: true,
  },
  regularIrregular: {
    type: String,
    required: true,
  },
});

module.exports = model("Verb", VerbSchema, "verbs");
