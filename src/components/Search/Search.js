import React from "react";
import PropTypes from "prop-types";
import { Input, InputWrapper } from "./Search.css";
import { connect } from "react-redux";
import { fetchMovies, changeSearch, changePage } from "data/actions";

const Search = ({
  searchMovie,
  fetchMovies,
  changeSearch,
  changePage,
  page,
}) => {
  const getMovies = () => {
    if (searchMovie.length > 2) {
      fetchMovies(searchMovie, page);
      changePage(1);
    }
  };

  const handleChange = (e) => {
    changeSearch(e.target.value);
  };

  return (
    <>
      <InputWrapper>
        <Input type="text" onChange={handleChange} value={searchMovie} />
        <Input
          type="submit"
          value="Search"
          onClick={getMovies}
          disabled={searchMovie.length < 3}
        ></Input>
      </InputWrapper>

      {searchMovie.length < 3 ? <p>Enter at least 3 characters</p> : ""}
    </>
  );
};
const mapDispatchToProps = {
  fetchMovies,
  changeSearch,
  changePage,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    number: state.number,
    searchMovie: state.movies.searchMovie,
    loadingState: state.movies.loadingState,
    page: state.movies.page,
  };
};

Search.propTypes = {
  searchMovie: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
