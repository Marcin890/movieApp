export const fetchMovies = (movie) => {
  const promise = fetch(
    `${process.env.REACT_APP_API_URL}/?s=${movie}&apikey=${process.env.REACT_APP_API_KEY}`
  );
  return promise;
};
