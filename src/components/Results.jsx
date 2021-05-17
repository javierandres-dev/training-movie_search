import { Spinner } from 'components/Spinner';
import { getMovie } from 'helpers/requests';
import React, { useState } from 'react';

export const Results = ({ movies, millis, movie, setMovie }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await getMovie(e.target.name);
    console.log(res);
    setMovie(res);
    setLoading(false);
  };

  return (
    <section id='top'>
      {loading && <Spinner />}
      {movie ? (
        <>
          <h2> in process ...</h2>
          <figure>
            <img />
            <figcaption>
              <br />
              <span></span>
            </figcaption>
          </figure>
        </>
      ) : (
        <>
          <h2>
            {movies.length} {movies.length > 1 ? 'results' : 'result'}&nbsp;
            <span>({millis / 1000} seconds)</span>
          </h2>
          {movies.map((movie, idx) => (
            <figure key={idx}>
              <a href='#top' onClick={handleClick}>
                <img
                  src={movie.Poster}
                  alt={`Poster ${movie.Title}`}
                  name={movie.imdbID}
                />
              </a>
              <figcaption>
                {movie.Title}
                <br />
                <span>
                  {movie.Type},&nbsp;{movie.Year}
                </span>
              </figcaption>
            </figure>
          ))}
        </>
      )}
    </section>
  );
};
