import axios from 'axios';

export const getMovies = async (aTitle) => {
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
