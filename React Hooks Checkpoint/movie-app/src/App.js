import React, { useState } from 'react';
import MovieList from './MovieList';
import Filtre from './Filtre';

const App = () => {
  // État pour les films, les filtres et le formulaire d'ajout de film
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://example.com/inception.jpg', rating: 9 },
    { title: 'Titanic', description: 'A tragic love story', posterURL: 'https://example.com/titanic.jpg', rating: 8.5 }
  ]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

  // Fonction pour ajouter un nouveau film
  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' }); // Réinitialiser le formulaire
  };

  // Filtrer les films selon le titre et la note
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && 
    (filterRating ? movie.rating >= filterRating : true)
  );

  return (
    <div className="app">
      <h1>Ma Liste de Films</h1>

      {/* Formulaire pour ajouter un film */}
      <div className="add-movie">
        <input 
          type="text" 
          placeholder="Titre" 
          value={newMovie.title} 
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={newMovie.description} 
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="URL de l'image" 
          value={newMovie.posterURL} 
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} 
        />
        <input 
          type="number" 
          placeholder="Note" 
          value={newMovie.rating} 
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })} 
        />
        <button onClick={addMovie}>Ajouter un film</button>
      </div>

      {/* Filtre des films */}
      <Filtre 
        filterTitle={filterTitle} 
        filterRating={filterRating} 
        setFilterTitle={setFilterTitle} 
        setFilterRating={setFilterRating} 
      />

      {/* Liste des films filtrés */}
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
