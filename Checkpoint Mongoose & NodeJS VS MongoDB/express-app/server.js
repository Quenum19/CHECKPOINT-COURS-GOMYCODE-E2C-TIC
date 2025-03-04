require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));
