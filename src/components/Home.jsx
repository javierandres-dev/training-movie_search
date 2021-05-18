import { Results } from 'components/Results';
import { Search } from 'components/Search';
import React from 'react';

export const Home = ({
  title,
  setTitle,
  movies,
  setMovies,
  movie,
  setMovie,
  millis,
  setMillis,
}) => {
  return (
    <main role='main' className='container'>
      <h1>movies, series, episodes</h1>
      <Search
        title={title}
        setTitle={setTitle}
        setMovies={setMovies}
        setMillis={setMillis}
        setMovie={setMovie}
      />
      {movies && (
        <Results
          movies={movies}
          millis={millis}
          movie={movie}
          setMovie={setMovie}
        />
      )}
    </main>
  );
};
