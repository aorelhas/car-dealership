import React from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
