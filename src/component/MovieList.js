import React from "react";
import { Card } from "react-bootstrap";
import MovieCard from "./MovieCard";
import MoviesCard from "./MovieCard.css";

function MovieList({ movies }) {
  return (
    <div className="movieslist">
      {movies.map((movie, i) => (
        <MovieCard movie={movie}/>
      ))}
    </div>
  );
}

export default MovieList;
