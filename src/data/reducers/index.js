import { combineReducers } from "redux";
import { movies, searchMovie } from "./movies.reducer";

// Łączenie reducerów
export default combineReducers({
  movies,
});
