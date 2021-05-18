import React from 'react';

export const Movies = ({ movies, millis, handleClick }) => {
  return (
    <section id='top' className='movies'>
      <h2>
        {movies.length} {movies.length > 1 ? 'results' : 'result'}&nbsp;
        <span>({millis / 1000} seconds)</span>
      </h2>
      <div className='movies--container'>
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
      </div>
    </section>
  );
};
