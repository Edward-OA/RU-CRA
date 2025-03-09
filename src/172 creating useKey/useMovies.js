import { useState, useEffect } from 'react';

const KEY = 'e007bee5';

export default function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(
    function () {
      // callback?.()

      // //this is the optional chaining method where we only
      // want to apply the call back function if it exists
      const controller = new AbortController(); //cleaning up the data after fetching

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error('Something went wrong with fetching movies');
          const data = await res.json();
          if (data.Response === 'False') throw new Error('Movie not found');
          setMovies(data.Search);

          setError('');
          console.log(data.Search);
        } catch (error) {
          console.log(error.message);
          if (error.nam !== 'AbortError') {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError('');
        return;
      }
      //   handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query] //This is just a sample because we do not lie about
    // dependency array thereofre we have to remove the call back
  );
  return { movies, isLoading, error };
}
