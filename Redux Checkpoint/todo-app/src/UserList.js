import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]); // State pour stocker la liste des utilisateurs
  const [loading, setLoading] = useState(true); // State pour indiquer si les données sont en cours de chargement

  useEffect(() => {
    // Effectue la requête axios pour récupérer les utilisateurs depuis l'API jsonplaceholder
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data); // Stocke les utilisateurs dans l'état
        setLoading(false); // Marque la fin du chargement
      })
      .catch(error => {
        console.error("Il y a eu une erreur en récupérant les utilisateurs :", error);
        setLoading(false); // Marque la fin du chargement en cas d'erreur
      });
  }, []); // [] indique que ce useEffect s'exécute uniquement lors du premier rendu

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {listOfUser.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
