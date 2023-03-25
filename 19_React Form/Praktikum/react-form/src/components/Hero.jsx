import React from 'react';
import HeroImg from '../assets/img/hero-img.png';

const Hero = () => {
  return (
    <div style={{ backgroundColor: '#37517e' }}>
      <div className='container py-5'>
        <div className='row mt-5'>
          <div className='hero-left col-12 col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center'>
            <h1 className='text-white'>Better Solution For Your Business</h1>
            <p>We are team of talented designers making websites with Bootstrap</p>
            <div className='d-flex justify-content-center justify-content-md-start align-items-center mt-5'>
              <a
                href='#'
                className='btn bg-lightblue rounded-pill text-white px-4 py-2 me-3'
                style={{ fontFamily: '"Jost", sans-serif' }}
              >
                Get Started
              </a>
              <a
                href='./create-product'
                className='btn btn-success rounded-pill text-white px-4 py-2 me-3'
                style={{ fontFamily: '"Jost", sans-serif' }}
              >
                Create Product
              </a>
              <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
                Watch Video
              </a>
            </div>
          </div>
          <div className='col-12 col-md-6 order-1 order-md-2 py-2'>
            <img className='img-fluid' src={HeroImg} alt='hero' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
