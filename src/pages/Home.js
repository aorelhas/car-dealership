import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { FeaturedCar } from '../components/FeaturedCar';
import { Location } from '../components/Location';

export const Home = () => {
  return (
    <>
      <Hero>
        <Services />
        {/* <FeaturedCar />
        <Location /> */}
      </Hero>
    </>
  );
};
