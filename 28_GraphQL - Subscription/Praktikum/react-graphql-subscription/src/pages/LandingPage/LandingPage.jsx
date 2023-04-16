import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import ListProduct from '../../components/ListProduct';
import './landingpage.css';
import useLandingPageViewModel from './LandingPage.viewModel';

const LandingPage = () => {
  const viewModel = useLandingPageViewModel();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className='container py-5'>
          <h1>PRODUCT LIST</h1>
          {viewModel.loading ? <h1>LOADING...</h1> : <ListProduct data={viewModel.data.product} />}
          <div className='d-flex'>
            <a href='./product-list' className='ms-auto mt-4 btn btn-primary'>
              Load More...
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
