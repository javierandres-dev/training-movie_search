import 'styles/App.css';
import React, { useState } from 'react';
import { Home } from 'components/Home';

function App() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState(null);
  const [movie, setMovie] = useState(null);
  const [millis, setMillis] = useState(null);

  return (
    <Home
      title={title}
      setTitle={setTitle}
      movies={movies}
      setMovies={setMovies}
      movie={movie}
      setMovie={setMovie}
      millis={millis}
      setMillis={setMillis}
    />
  );
}

export default App;
