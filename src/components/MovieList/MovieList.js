import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Container } from "./MovieList.css";
import Movie from "components/Movie";
import Loading from "components/Loading";
import { connect } from "react-redux";
import { fetchMovies, changeSearch } from "data/actions";

const MovieList = ({ movies, fetchMovies, loadingState, searchMovie }) => {
  const moviesList = movies.map((movie) => <Movie movie={movie} />);

  useEffect(() => {
    fetchMovies(searchMovie);
  }, []);

  const isLoaded = useMemo(() => Object.keys(loadingState).length === 0, [
    loadingState,
  ]);
  return (
    <Container>
      {isLoaded ? "" : <Loading />}
      {moviesList}
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

const mapDispatchToProps = {
  fetchMovies,
  changeSearch,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    searchMovie: state.movies.searchMovie,
    loadingState: state.movies.loadingState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
