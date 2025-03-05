const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const app = express();
app.use(express.json()); // Middleware pour parser le JSON

// Connexion à la base de données MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur de connexion :", err));

// ROUTES API REST

// 🔹 Récupérer tous les utilisateurs
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// 🔹 Ajouter un nouvel utilisateur
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: "Erreur lors de l'ajout" });
  }
});

// 🔹 Modifier un utilisateur par ID
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: "Échec de la mise à jour" });
  }
});

// 🔹 Supprimer un utilisateur par ID
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Utilisateur supprimé" });
  } catch (err) {
    res.status(400).json({ message: "Erreur lors de la suppression" });
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
