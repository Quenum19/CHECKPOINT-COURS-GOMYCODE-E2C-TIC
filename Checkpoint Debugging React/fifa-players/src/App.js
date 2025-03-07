import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
  const [movies, setMovies] = useState([
    { title: "Inception", description: "A mind-bending thriller", posterURL: "https://example.com/inception.jpg", rating: 9 },
    { title: "The Dark Knight", description: "A dark superhero movie", posterURL: "https://example.com/dark-knight.jpg", rating: 10 },
    { title: "Interstellar", description: "A space exploration story", posterURL: "https://example.com/interstellar.jpg", rating: 8.5 }
  ]);
  const [filter, setFilter] = useState("");

  const filteredMovies = movies.filter(
    (movie) => movie.title.toLowerCase().includes(filter.toLowerCase()) || movie.rating >= filter
  );

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
