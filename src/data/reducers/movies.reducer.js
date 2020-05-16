import {
  LOADING_STATES,
  CHANGE_SEARCH,
  CHANGE_PAGE,
  FETCH_MOVIES,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "data/constants";

const initialState = {
  loadingState: {},
  movies: [],
  searchMovie: "tree",
  page: 1,
  totalResults: 1,
};

export const movies = (state = initialState, action) => {
  const newLoadingState = { ...state.loadingState };
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      console.log("req");
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case FETCH_MOVIES_SUCCESS:
      delete newLoadingState.FETCH_MOVIES_REQUEST;
      console.log("suc");
      return {
        ...state,
        movies: [...action.movies],
        loadingState: newLoadingState,
        totalResults: action.totalResults,
      };
    case FETCH_MOVIES_FAILURE:
      delete newLoadingState.FETCH_MOVIES_REQUEST;
      console.log("fail");
      return {
        ...state,
        movies: {},
        loadingState: newLoadingState,
      };
    case CHANGE_SEARCH:
      return {
        ...state,
        searchMovie: action.movie,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
};
