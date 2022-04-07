import React from "react";
import { Card } from "react-bootstrap";
import MovieCard from "./MovieCard";
import MoviesCard from "./MovieCard.css";

function MovieList({ movies, searchTxt }) {
  return (
    <div className="movieslist">
      {movies
        .filter((el) =>
          el.title.toLowerCase().includes(searchTxt.toLowerCase())
        )
        .map((movie, i) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
}

export default MovieList;
