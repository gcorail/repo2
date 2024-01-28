const mongoose = require("mongoose");

const MONGO_URL = `${process.env.MONGODB}`;

mongoose.set('strictQuery', true);

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("BASE DE DATOS FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db