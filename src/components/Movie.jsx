import React from 'react';

export const Movie = ({ movie }) => {
  return (
    <>
      <h2>
        {movie.Title} ({movie.Year}, {movie.Country})
      </h2>
      <p>
        {movie.Type} <span>{movie.Rated}</span> {movie.Runtime} | {movie.Genre}
      </p>
      <figure>
        <img src={movie.Poster} alt={`Poster ${movie.Title}`} />
      </figure>
      <p>{movie.Plot}</p>
      <ul>
        <li>directed by: {movie.Director}</li>
        <li>written by: {movie.Writer}</li>
        <li>starring: {movie.Actors}</li>
        <li>production: {movie.Production}</li>
        <li>released date: {movie.Released}</li>
        <li>original language: {movie.Language}</li>
        <li>awards: {movie.Awards}</li>
      </ul>
    </>
  );
};
