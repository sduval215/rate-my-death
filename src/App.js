import React from 'react';

// ROUTINGS
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
