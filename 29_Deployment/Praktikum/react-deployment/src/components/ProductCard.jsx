import React from 'react';

const ProductCard = ({ id, title, description, ...props }) => {
  return (
    <div className='card'>
      <img
        src={'https://placehold.co/600x400?text=Product+Item'}
        className='card-img-top'
        alt='Product Image'
      />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href={`/product/${id}`} className='btn btn-primary'>
          Detail View
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
