import React, { useReducer } from 'react';
import useDetailProductviewModel from './DetailProduct.viewModel';

const DetailProduct = () => {
  const viewModel = useDetailProductviewModel();

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card w-50 shadow-lg'>
        <h5 className='card-header'>Detail Product</h5>
        <div className='card-body'>
          <h3 className='card-title'>{viewModel.product.productName}</h3>
          <p className='card-text'>{viewModel.product.additionalDescription}</p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            Category: <span className='badge bg-primary'>{viewModel.product.productCategory}</span>
          </li>
          <li className='list-group-item'>
            Freshness: <span className='badge bg-primary'>{viewModel.product.productFreshness}</span>{' '}
          </li>
          <li className='list-group-item'>
            Price: <span className='badge bg-primary'>$ {viewModel.product.productPrice}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailProduct;
