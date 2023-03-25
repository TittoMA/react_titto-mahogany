import React from 'react';
import ImgSlide1 from '../assets/img/img-slide1.jpg';
import ImgSlide2 from '../assets/img/img-slide2.jpg';
import ImgSlide3 from '../assets/img/img-slide3.jpg';

const Carousel = () => {
  return (
    <div className='container p-5'>
      <h2 className='fw-bold text-center mb-4'>Our Gallery</h2>
      <div id='carouselExampleAutoplaying' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={ImgSlide1} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={ImgSlide2} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={ImgSlide3} className='d-block w-100' alt='...' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleAutoplaying'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleAutoplaying'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
