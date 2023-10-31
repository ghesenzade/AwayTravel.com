import React from 'react'

// -----------------------------------SECTIONS---------------------------------------------------
import Hero from './sections/Hero';
import FavSection from '../pages/sections/FavSection';
import TravelSteps from './sections/TravelSteps';
import HomeSlide from './sections/HomeSlide';
import GettingMoney from './sections/GettingMoney';
import AwayInCountries from './sections/AwayInCountries';

const Home = () => {
  return (
    <main>
      <Hero/>
      <FavSection/>
      <TravelSteps/>
      <HomeSlide/>
      <GettingMoney/>
      <AwayInCountries/>
    </main>
  )
}

export default Home