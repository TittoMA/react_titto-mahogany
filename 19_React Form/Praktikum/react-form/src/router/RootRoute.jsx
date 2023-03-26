import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateProduct from '../pages/CreateProduct';
import DetailProduct from '../pages/DetailProduct';
import Login from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/create-product'} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route
          path='/create-product'
          element={
            <PrivateRoute>
              <CreateProduct />
            </PrivateRoute>
          }
        />
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
