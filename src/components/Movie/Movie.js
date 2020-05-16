import React from "react";
import { Container } from "./Movie.css";
import PropTypes from "prop-types";
const Movie = ({ movie }) => {
  return (
    <>
      <Container key={movie.imdbID}>
        <p>
          {movie.Title} {movie.Year}
        </p>
        <p>
          <img src={movie.Poster} alt="" />
        </p>
      </Container>
    </>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
