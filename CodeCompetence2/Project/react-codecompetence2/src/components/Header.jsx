import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className='navbar fixed-top navbar-dark bg-dark navbar-expand-md shadow'>
        <div className='container-fluid px-4 py-2'>
          <h1 className='d-flex justify-content-center mb-0'>
            <a
              href='#'
              className='navbar-brand'
              style={{ fontFamily: '"Tilt Warp", cursive', letterSpacing: 2 }}
            >
              <b>titto.ma</b>
            </a>
          </h1>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav gap-2'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
            </ul>
            <ul className='navbar-nav ms-auto mt-2 mt-md-0'>
              <li className='nav-item'>
                <a className='nav-link btn btn-light text-dark rounded-pill px-3 py-1' href='#contact'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='p-4' style={{ minHeight: 56 }}>
        .
      </div>
    </header>
  );
};

export default Header;
