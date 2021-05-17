export const getMovies = async (aTitle) => {
  const endpoint = `http://www.omdbapi.com/?s=${aTitle}&apikey=eee2d984`;
  let res = null;
  try {
    res = await fetch(endpoint);
    if (res.ok) {
      const json = await res.json();
      res = json.Search;
    }
  } catch (error) {
    res = error;
  } finally {
    return res;
  }
};

export const getMovie = async (aId) => {
  const endpoint = `http://www.omdbapi.com/?i=${aId}&apikey=eee2d984`;
  let res = null;
  try {
    res = await fetch(endpoint);
    if (res.ok) {
      const json = await res.json();
      res = json;
    }
  } catch (error) {
    res = error;
  } finally {
    return res;
  }
};
