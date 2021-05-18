import { Spinner } from 'components/Spinner';
import { getMovies } from 'helpers/requests';
import React, { useState } from 'react';

export const Search = ({ title, setTitle, setMovies, setMillis, setMovie }) => {
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMovie(null);
    const start = Date.now();
    const res = await getMovies(title);
    setMovies(res);
    const end = Date.now();
    setMillis(end - start);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor='search'>search</label>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Title to search'
            value={title}
            onChange={handleChange}
          />
        </form>
      )}
    </>
  );
};
