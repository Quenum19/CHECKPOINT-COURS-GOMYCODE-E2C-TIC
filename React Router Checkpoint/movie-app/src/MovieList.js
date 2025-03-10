import { Link } from "react-router-dom";
import movies from "./movies";

function MovieList() {
  return (
    <div>
      <h1>Movies</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.image} alt={movie.title} width="200" />
          <Link to={`/movie/${movie.id}`}>Voir Détails</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
