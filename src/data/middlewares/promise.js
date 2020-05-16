// Middleware do obsługi żądań asynchronicznych
export default function promiseMiddleware() {
  return function (next) {
    return function (action) {
      const { promise, type, ...data } = action;

      // Sprawdza czy to promise, jeśli nie, przechodzi do kolejnego middleware
      if (!promise || typeof promise.then !== "function") {
        return next(action);
      }

      const SUCCESS = `${type}_SUCCESS`;
      const FAILURE = `${type}_FAILURE`;
      const REQUEST = `${type}_REQUEST`;

      next({ type: REQUEST, ...data });

      return promise
        .then((response) => response.json())
        .then((data) => {
          next({
            type: SUCCESS,
            movies: action.movies,
            ...data,
          });
        })
        .catch((error) => {
          next({ type: FAILURE, error, ...data });
        });
    };
  };
}
