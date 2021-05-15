import axios from 'axios';
import React, { useState } from 'react';

export const Search = () => {
  const [title, setTitle] = useState('');

  const queryApi = async (aTitle) => {
    const endpoint = `http://www.omdbapi.com/?s=${aTitle}&apikey=eee2d984`;
    try {
      const res = await axios.get(endpoint);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('query finished');
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    queryApi(title);
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
