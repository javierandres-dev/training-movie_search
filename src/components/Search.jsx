import { getMovies } from 'helpers/requests';
import React, { useState } from 'react';

export const Search = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='search'>movie search</label>
      <input
        type='search'
        name='search'
        id='search'
        placeholder='Movie title to search'
        value={title}
        onChange={handleChange}
      />
    </form>
  );
};
