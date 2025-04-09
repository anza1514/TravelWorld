import React from 'react';
import Hero from '../components/Hero';
import FeaturedTrips from '../components/FeaturedTrips';
import TopDestinations from '../components/TopDestinations';
import Reviews from '../components/Reviews';
import TravelersChoice from '../components/TravelersChoice';
import Footer from '../components/Footer';
import Other from '../components/Other';


const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedTrips />
      <TopDestinations />
      <Reviews />
      <TravelersChoice />
      <Other />
     
      <Footer />
    </div>
  );
};

export default Home;