const mongoose = require("mongoose");

const config = {
  // URL de la base de datos
  url: process.env.DATABASE_URL,
  // Opciones de conexión
  options: {
  },
};

mongoose.connect(config.url, config.options);

module.exports = mongoose;
