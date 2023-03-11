import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-md bg-white shadow'>
        <div className='container-fluid px-4'>
          <h1>
            <a
              href='#'
              className='navbar-brand'
              style={{ color: '#4e6da3', textTransform: 'uppercase' }}
            >
              <b>Arsha</b>
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
            <ul className='navbar-nav ms-auto gap-4'>
              <li className='nav-item d-none d-md-block'>
                <a
                  className='nav-link btn btn-primary text-white px-3 d-inline-block mt-3 mt-md-0'
                  aria-current='page'
                  href='#'
                >
                  Home
                </a>
              </li>
              <li className='nav-item d-md-none'>
                <a className='nav-link text-primary' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-primary' href='#'>
                  Features
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-primary' href='#'>
                  Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-primary' href='#'>
                  FAQs
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-primary' href='#'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
