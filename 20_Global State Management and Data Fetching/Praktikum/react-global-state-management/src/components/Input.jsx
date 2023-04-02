import React from 'react';

function Input({ label, type, id, name, onChange, value, isTouched, errorMsg, ...props }) {
  const inputBorder = errorMsg && isTouched ? 'red' : '#dee2e6';
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <input
        {...props}
        style={{ width: 282, borderColor: inputBorder }}
        type={type}
        className='form-control'
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
      {errorMsg && isTouched && <p className={`text-danger`}>{errorMsg}</p>}
    </div>
  );
}

export default Input;
