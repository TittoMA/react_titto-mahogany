import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import '../styles/landingpage.css';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Carousel />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
