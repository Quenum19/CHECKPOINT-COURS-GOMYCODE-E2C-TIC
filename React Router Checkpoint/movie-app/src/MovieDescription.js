import { useParams, Link } from "react-router-dom";
import movies from "./movies";

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <h2>Film non trouvé</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe width="560" height="315" src={movie.trailer} title={movie.title}></iframe>
      <br />
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default MovieDetail;
