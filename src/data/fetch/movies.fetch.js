export const fetchMovies = (movie, page) => {
  const promise = fetch(
    `${process.env.REACT_APP_API_URL}/?s=${movie}&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`
  );
  return promise;
};
