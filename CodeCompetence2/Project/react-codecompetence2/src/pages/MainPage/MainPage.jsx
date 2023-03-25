import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import ContactForm from '../../components/ContactForm';
import About from '../../components/About';
import './MainPage.css';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#212529'
            fillOpacity={1}
            d='M0,32L0,160L102.9,160L102.9,64L205.7,64L205.7,128L308.6,128L308.6,192L411.4,192L411.4,128L514.3,128L514.3,128L617.1,128L617.1,0L720,0L720,64L822.9,64L822.9,96L925.7,96L925.7,192L1028.6,192L1028.6,160L1131.4,160L1131.4,64L1234.3,64L1234.3,224L1337.1,224L1337.1,64L1440,64L1440,320L1337.1,320L1337.1,320L1234.3,320L1234.3,320L1131.4,320L1131.4,320L1028.6,320L1028.6,320L925.7,320L925.7,320L822.9,320L822.9,320L720,320L720,320L617.1,320L617.1,320L514.3,320L514.3,320L411.4,320L411.4,320L308.6,320L308.6,320L205.7,320L205.7,320L102.9,320L102.9,320L0,320L0,320Z'
          />
        </svg>

        <ContactForm />
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#212529'
            fillOpacity={1}
            d='M0,128L60,128C120,128,240,128,360,128C480,128,600,128,720,106.7C840,85,960,43,1080,32C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
          />
        </svg>
        <About />
      </main>
      <Footer />
    </>
  );
};
export default MainPage;
