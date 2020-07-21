import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'

const MovieList = props => {
  console.log(props)
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  const { url } = useRouteMatch();

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>Details</Link>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>

  );
}

export default MovieList;
