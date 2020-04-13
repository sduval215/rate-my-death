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
import Intro from './pages/Intro/Intro';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Intro} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
