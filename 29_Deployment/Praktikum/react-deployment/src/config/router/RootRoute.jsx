import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateProduct from '../../pages/CreateProduct/CreateProduct';
import DetailProduct from '../../pages/DetailProduct/DetailProduct';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import LandingPage from '../../pages/LandingPage/LandingPage';
import ProductListPage from '../../pages/ProductListPage/ProductListPage';
import PrivateRoute from './PrivateRoute';

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product-list' element={<ProductListPage />} />
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/create-product/:productId' element={<CreateProduct />} />

        <Route path='/product/:productId' element={<DetailProduct />} />
        <Route
          path='*'
          element={
            <div className='d-flex justify-content-center align-items-center min-vh-100'>
              <h1>404 Not Found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
