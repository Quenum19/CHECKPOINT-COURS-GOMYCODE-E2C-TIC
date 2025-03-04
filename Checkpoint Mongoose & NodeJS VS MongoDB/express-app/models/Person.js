const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Champ obligatoire
  age: { type: Number }, // Nombre
  favoriteFoods: { type: [String] } // Tableau de chaînes de caractères
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
