import React from 'react';

export const Movie = ({ movie }) => {
  return (
    <section className='movie'>
      <h2>
        {movie.Title}{' '}
        <span>
          ({movie.Year}, {movie.Country})
        </span>
      </h2>
      <p>
        {movie.Type} <span>{movie.Rated}</span> {movie.Runtime}
        <b> | </b>
        {movie.Genre}
      </p>
      <div className='movie--container'>
        <figure>
          <img src={movie.Poster} alt={`Poster ${movie.Title}`} />
        </figure>
        <div>
          <p>{movie.Plot}</p>
          <ul>
            <li>
              <span>Directed by: </span>
              {movie.Director}
            </li>
            <li>
              <span>Written by: </span>
              {movie.Writer}
            </li>
            <li>
              <span>Starring: </span>
              {movie.Actors}
            </li>
            <li>
              <span>Production: </span>
              {movie.Production}
            </li>
            <li>
              <span>Released date: </span>
              {movie.Released}
            </li>
            <li>
              <span>Original language: </span>
              {movie.Language}
            </li>
            <li>
              <span>Awards: </span>
              {movie.Awards}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
