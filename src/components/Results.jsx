import { getMovie } from 'helpers/requests';
import { Spinner } from 'components/Spinner';
import { Movies } from 'components/Movies';
import { Movie } from 'components/Movie';
import React, { useState } from 'react';

export const Results = ({ movies, millis, movie, setMovie }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await getMovie(e.target.name);
    setMovie(res);
    setLoading(false);
  };

  return (
    <>
      {loading && <Spinner />}
      {movie ? (
        <Movie movie={movie} />
      ) : (
        <Movies movies={movies} millis={millis} handleClick={handleClick} />
      )}
    </>
  );
};
