import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Search.css";
import { connect } from "react-redux";
import { fetchMovies, changeSearch } from "data/actions";

const Search = ({ searchMovie, fetchMovies, changeSearch }) => {
  const getMovies = () => {
    if (searchMovie.length > 2) {
      fetchMovies(searchMovie);
    }
  };

  const handleChange = (e) => {
    changeSearch(e.target.value);
  };

  return (
    <>
      <Input type="text" onChange={handleChange} />
      <button
        value={searchMovie}
        onClick={getMovies}
        disabled={searchMovie.length < 3}
      >
        Search
      </button>
      {searchMovie.length < 3 ? <p>Enter at least 3 characters</p> : ""}
    </>
  );
};
const mapDispatchToProps = {
  fetchMovies,
  changeSearch,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    number: state.number,
    searchMovie: state.movies.searchMovie,
    loadingState: state.movies.loadingState,
  };
};

Search.propTypes = {
  searchMovie: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
