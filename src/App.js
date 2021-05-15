import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Results } from './components/Results';
import { Home } from './components/Home';
import { Error404 } from './components/Error404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/results' component={Results} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
