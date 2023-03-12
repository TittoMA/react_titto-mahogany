import React from 'react';

const InputGroup = ({ label, id, name, placeholder }) => {
  return (
    <div id={`${id}-field`}>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <div className='input-group'>
        <span className='input-group-text'>$</span>
        <input
          type='number'
          id={id}
          name={name}
          className='form-control'
          placeholder={placeholder}
          aria-label='Amount (to the nearest dollar)'
          min={0}
        />
      </div>
      <div id={`${id}-feedback`} className='text-danger d-none'>
        Please add price for product.
      </div>
    </div>
  );
};

export default InputGroup;
