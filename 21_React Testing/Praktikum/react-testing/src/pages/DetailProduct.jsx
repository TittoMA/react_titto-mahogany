import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductListSelector } from '../config/redux/product/productSelector';

const DetailProduct = () => {
  const { productId } = useParams();
  const productList = useProductListSelector();
  const product = productList[productId - 1];
  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card w-50 shadow-lg'>
        <h5 className='card-header'>Detail Product</h5>
        <div className='card-body'>
          <h3 className='card-title'>{product.productName}</h3>
          <p className='card-text'>{product.additionalDescription}</p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            Category: <span className='badge bg-primary'>{product.productCategory}</span>
          </li>
          <li className='list-group-item'>
            Freshness: <span className='badge bg-primary'>{product.productFreshness}</span>{' '}
          </li>
          <li className='list-group-item'>
            Price: <span className='badge bg-primary'>$ {product.productPrice}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailProduct;
