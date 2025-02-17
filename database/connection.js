const mongoose = require("mongoose");
require("dotenv").config();
const { dataBase } = require("../text/textFile.json");

const connection = async () => {
  const url = `${dataBase.urlBase}${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=${dataBase.appName}`;
  try {
    await mongoose.connect(url, {});
    console.log(`${dataBase.successConnection}`);
  } catch (error) {
    console.log(`${dataBase.errorConnection}`);
    throw new Error(`${dataBase.errorConnection}`);
  }
};

module.exports = {
  connection,
};
