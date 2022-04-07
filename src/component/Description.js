import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Description = ({ movies }) => {
    const { idmovie } = useParams();
  
    const [movie, setMovie] = useState({});
  
    const findMovie = () => {
      setMovie(movies.find((el) => el.id === idmovie));
    };
  
    useEffect(() => {
      findMovie();
    }, []);
  
    return (
      <div>
        <h1>{movie.title}</h1>
      </div>
    );
  };
  
  export default Description;