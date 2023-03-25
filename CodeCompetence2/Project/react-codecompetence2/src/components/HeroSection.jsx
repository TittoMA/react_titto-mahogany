import React from 'react';
import WelcomeImg from '../assets/img/welcome-img.svg';

const HeroSection = () => {
  return (
    <div className='container py-4 mb-5'>
      <div className='row gap-4 gap-md-0'>
        <div className='col-12 col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center align-items-center'>
          <h1>Hello, visitor!</h1>
          <p>welcome to my personal website.</p>
          <a href='#contact' className='btn btn-dark rounded-pill px-4'>
            Get in touch
          </a>
        </div>
        <div
          className='col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center'
          style={{ maxHeight: 500 }}
        >
          <img className='img-fluid h-100 hero-img' src={WelcomeImg} alt='Welcome Image' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
