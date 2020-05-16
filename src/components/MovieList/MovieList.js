import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Container, ReactPaginateWrapper } from "./MovieList.css";
import Movie from "components/Movie";
import Loading from "components/Loading";
import { connect } from "react-redux";
import { fetchMovies, changeSearch, changePage } from "data/actions";
import ReactPaginate from "react-paginate";

const MovieList = ({
  movies,
  fetchMovies,
  loadingState,
  searchMovie,
  changePage,
  page,
  totalResults,
}) => {
  const moviesList =
    movies.length > 0 && movies.map((movie) => <Movie movie={movie} />);

  useEffect(() => {
    fetchMovies(searchMovie, page);
  }, [page]);

  const isLoaded = useMemo(() => Object.keys(loadingState).length === 0, [
    loadingState,
  ]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    changePage(selectedPage + 1);
  };

  let paginationElement;

  paginationElement = (
    <ReactPaginateWrapper>
      <ReactPaginate
        previousLabel={"← "}
        nextLabel={" →"}
        breakLabel={<span className="gap">...</span>}
        pageCount={totalResults / 10}
        onPageChange={handlePageClick}
        forcePage={page - 1}
        containerClassName={"pagination"}
        previousLinkClassName={"previous_page"}
        nextLinkClassName={"next_page"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </ReactPaginateWrapper>
  );

  return (
    <>
      {isLoaded ? "" : <Loading />}
      <Container>{moviesList ? moviesList : "Brak Wyników"}</Container>
      {/* <button onClick={handleChange}>Button</button> */}
      {paginationElement}
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

const mapDispatchToProps = {
  fetchMovies,
  changeSearch,
  changePage,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    searchMovie: state.movies.searchMovie,
    loadingState: state.movies.loadingState,
    page: state.movies.page,
    totalResults: state.movies.totalResults,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
