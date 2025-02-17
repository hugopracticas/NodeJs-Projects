const mongoose = require("mongoose");
require("dotenv").config();
const text = require("../text/textFile.json");

const connection = async () => {
  const url = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(url, {});
    console.log(`${text.dataBase} ${url.substring(url.length - 8)}`);
  } catch (error) {
    console.log(error);
    throw new Error(`${text.errorConectionDB}`);
  }
};

module.exports = {
  connection,
};
