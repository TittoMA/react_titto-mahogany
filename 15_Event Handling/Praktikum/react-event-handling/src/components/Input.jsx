import React from 'react';

function Input({ label, type, id, name, onChange, value, validation }) {
  const inputBorder = validation.isValid ? '#dee2e6' : 'red';
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <input
        style={{ width: 282, borderColor: inputBorder }}
        type={type}
        className='form-control'
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
      <div
        id='product-name-feedback'
        className={`text-danger ${validation.isValid && 'd-none'}`}
      >
        {validation.message}
      </div>
    </div>
  );
}

export default Input;
