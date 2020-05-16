import React from "react";
import {
  Container,
  MoviePoster,
  MovieDescription,
  MovieWrapper,
  MoviePosterWrapper,
} from "./Movie.css";
import PropTypes from "prop-types";
const Movie = ({ movie }) => {
  const posterLink =
    movie.Poster !== "N/A" ? movie.Poster : "images/noposter.jpg";

  return (
    <>
      <Container key={movie.imdbID}>
        <MovieWrapper>
          <MoviePosterWrapper>
            <MoviePoster src={posterLink} />
          </MoviePosterWrapper>
          <MovieDescription>
            <p>{movie.Title}</p>
          </MovieDescription>
        </MovieWrapper>
      </Container>
    </>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
