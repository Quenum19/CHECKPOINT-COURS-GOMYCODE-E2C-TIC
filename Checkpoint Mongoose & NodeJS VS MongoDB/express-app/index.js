const Person = require("./models/Person");

// Création d'une instance de Person
const person = new Person({
  name: "Jean Dupont",
  age: 30,
  favoriteFoods: ["Pizza", "Sushi"]
});

// Sauvegarde de l'enregistrement dans la base de données
person.save((err, data) => {
  if (err) {
    console.error("Erreur lors de l'enregistrement :", err);
  } else {
    console.log("Personne enregistrée :", data);
  }
});


const arrayOfPeople = [
    { name: "Alice", age: 25, favoriteFoods: ["Salade", "Poulet"] },
    { name: "Bob", age: 35, favoriteFoods: ["Steak", "Frites"] },
    { name: "Charlie", age: 28, favoriteFoods: ["Pâtes", "Fromage"] }
  ];
  
  // Création de plusieurs personnes
  Person.create(arrayOfPeople, (err, people) => {
    if (err) {
      console.error("Erreur lors de la création des personnes :", err);
    } else {
      console.log("Personnes ajoutées :", people);
    }
  });

  const findPeopleByName = (personName) => {
    Person.find({ name: personName }, (err, people) => {
      if (err) {
        console.error("Erreur lors de la recherche :", err);
      } else {
        console.log(`Personnes trouvées avec le nom ${personName} :`, people);
      }
    });
  };
  
  // Exemple d'utilisation :
  findPeopleByName("Alice");

  
  // Fonction pour trouver une personne par un aliment favori
const findOneByFood = (food) => {
    // Recherche d'une seule personne qui a cet aliment dans sa liste favorite
    Person.findOne({ favoriteFoods: food }, (err, person) => {
      if (err) {
        console.error("Erreur lors de la recherche :", err); // Affiche l'erreur si la requête échoue
      } else {
        console.log(`Personne trouvée qui aime ${food} :`, person); // Affiche la personne trouvée
      }
    });
  };
  
  // Exemple d'utilisation : Recherche d'une personne qui aime la "Pizza"
  findOneByFood("Pizza");

  // Fonction pour trouver une personne par son ID
const findPersonById = (personId) => {
    // Recherche de la personne en fonction de son identifiant unique
    Person.findById(personId, (err, person) => {
      if (err) {
        console.error("Erreur lors de la recherche par ID :", err); // Affiche l'erreur si la requête échoue
      } else {
        console.log("Personne trouvée par ID :", person); // Affiche la personne trouvée
      }
    });
  };
  
  // Exemple d'utilisation : Remplacez "ID_EXEMPLE" par un ID réel présent dans la base de données
  findPersonById("ID_EXEMPLE");

  
  // Fonction pour ajouter "hamburger" aux aliments favoris d'une personne
    const addFavoriteFood = (personId) => {
    // Trouver la personne par son ID
    Person.findById(personId, (err, person) => {
      if (err) {
        console.error("Erreur lors de la recherche :", err); // Gérer l'erreur
      } else if (person) {
        // Ajouter "hamburger" à la liste des aliments favoris
        person.favoriteFoods.push("hamburger");
  
        // Marquer le champ comme modifié si nécessaire
        person.markModified("favoriteFoods");
  
        // Sauvegarder la mise à jour
        person.save((err, updatedPerson) => {
          if (err) {
            console.error("Erreur lors de la mise à jour :", err);
          } else {
            console.log("Personne mise à jour :", updatedPerson);
          }
        });
      } else {
        console.log("Personne non trouvée.");
      }
    });
  };
  
  // Exemple d'utilisation : Remplacez "ID_EXEMPLE" par un ID réel
  addFavoriteFood("ID_EXEMPLE");

  // Fonction pour mettre à jour l'âge d'une personne par son nom
const updatePersonAge = (personName) => {
    Person.findOneAndUpdate(
      { name: personName }, // Condition de recherche
      { age: 20 }, // Nouvelle valeur de l'âge
      { new: true }, // Option pour renvoyer la version mise à jour
      (err, updatedPerson) => {
        if (err) {
          console.error("Erreur lors de la mise à jour :", err);
        } else if (updatedPerson) {
          console.log("Personne mise à jour :", updatedPerson);
        } else {
          console.log("Personne non trouvée.");
        }
      }
    );
  };
  
  // Exemple d'utilisation : Remplacez "NOM_EXEMPLE" par un nom réel
  updatePersonAge("NOM_EXEMPLE");

  // Fonction pour supprimer une personne par son _id
const deletePersonById = (personId) => {
    Person.findByIdAndRemove(personId, (err, deletedPerson) => {
      if (err) {
        console.error("Erreur lors de la suppression :", err);
      } else if (deletedPerson) {
        console.log("Personne supprimée :", deletedPerson);
      } else {
        console.log("Aucune personne trouvée avec cet ID.");
      }
    });
  };
  
  // Exemple d'utilisation : Remplacez "ID_EXEMPLE" par un ID réel
  deletePersonById("ID_EXEMPLE");

  // Fonction pour supprimer toutes les personnes nommées "Mary"
const deleteManyPeople = (name) => {
    Person.deleteMany({ name: name }, (err, result) => {
      if (err) {
        console.error("Erreur lors de la suppression :", err);
      } else {
        console.log("Résultat de la suppression :", result);
      }
    });
  };
  
  // Exemple d'utilisation
  deleteManyPeople("Mary");

  
  // Fonction pour trouver des personnes qui aiment les burritos, trier par nom, limiter à 2 résultats et masquer l'âge.
const searchAndFilterPeople = () => {
    Person.find({ favoriteFoods: "burritos" }) // Filtrer les personnes qui aiment les burritos
      .sort({ name: 1 }) // Trier par ordre alphabétique du nom
      .limit(2) // Limiter les résultats à 2 personnes
      .select("-age") // Exclure l'âge des résultats
      .exec((err, data) => { // Exécuter la requête
        if (err) {
          console.error("Erreur lors de la recherche :", err);
        } else {
          console.log("Personnes trouvées :", data);
        }
      });
  };
  
  // Exécuter la fonction
  searchAndFilterPeople();
  
  