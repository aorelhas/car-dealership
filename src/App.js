import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { FeaturedCar } from './components/FeaturedCar';
import { Home } from './pages/Home';
import { Services } from './components/Services';
import { Location } from './components/Location';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <FeaturedCar />
      <Location />
    </>
  );
};

export default App;
