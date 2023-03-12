import React from 'react';

function Input({ label, type, id, name }) {
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <input
        style={{ width: 282 }}
        type={type}
        className='form-control'
        id={id}
        name={name}
      />
      <div id='product-name-feedback' className='text-danger d-none'>
        Please fill out this field.
      </div>
    </div>
  );
}

export default Input;
