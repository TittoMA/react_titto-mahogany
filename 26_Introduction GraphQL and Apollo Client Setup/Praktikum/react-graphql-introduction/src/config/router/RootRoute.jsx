import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateProduct from '../../pages/CreateProduct/CreateProduct';
import DetailProduct from '../../pages/DetailProduct/DetailProduct';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import PrivateRoute from './PrivateRoute';

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/create-product'} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
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
