import React from 'react';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
  const { productId } = useParams();
  const dataProduct = JSON.parse(localStorage.getItem('dataProduct'));
  const product = dataProduct[productId - 1];
  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card w-50 shadow-lg'>
        <h5 className='card-header'>Detail Product</h5>
        <div className='card-body'>
          <h3 className='card-title'>{product.name}</h3>
          <p className='card-text'>{product.description}</p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            Category: <span class='badge bg-primary'>{product.category}</span>
          </li>
          <li className='list-group-item'>
            Freshness: <span class='badge bg-primary'>{product.freshness}</span>{' '}
          </li>
          <li className='list-group-item'>
            Price: <span class='badge bg-primary'>$ {product.price}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailProduct;
