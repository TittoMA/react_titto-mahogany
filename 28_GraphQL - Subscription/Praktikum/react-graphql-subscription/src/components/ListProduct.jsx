import React from 'react';
import ProductCard from './ProductCard';

const ListProduct = ({ data }) => {
  return (
    <div className='row'>
      {data.map((item) => (
        <div key={item.id} className='col-12 col-md-4 mt-3'>
          <ProductCard id={item.id} title={item.product_name} description={item.additional_description} />
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
