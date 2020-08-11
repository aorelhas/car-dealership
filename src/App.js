import React from 'react';
import './App.css';

import Cars from './pages/Cars';
import SingleCar from './pages/SingleCar';
import Error from './pages/Error';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
