import {
  FETCH_MOVIES,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "data/constants";

import API from "data/fetch";

export const fetchMovies = (movie) => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIES_REQUEST,
  });
  try {
    // const response = await fetchMovies(movies);
    const response = await API.budget.fetchMovies(movie);
    const data = await response.json();
    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      movies: data.Search,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIES_FAILURE,
    });
  }
};

// export const fetchMovies = (movie) => async (dispatch) => {
//   const promise = await API.budget.fetchMovies(movie);
//   dispatch({
//     type: FETCH_MOVIES,
//     promise,
//   });
// };

export const changeSearch = (movie) => ({
  type: "CHANGE_SEARCH",
  movie,
});
