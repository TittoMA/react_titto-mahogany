import React from 'react';

const InputGroup = ({ label, id, name, placeholder, onChange, value, isTouched, errorMsg, ...props }) => {
  const inputBorder = errorMsg && isTouched ? 'red' : '#dee2e6';
  return (
    <div id={`${id}-field`}>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <div className='input-group'>
        <span className='input-group-text'>$</span>
        <input
          {...props}
          style={{ borderColor: inputBorder }}
          type='number'
          id={id}
          name={name}
          className='form-control'
          placeholder={placeholder}
          min={0}
          onChange={onChange}
          value={value}
        />
      </div>
      {errorMsg && isTouched && <p className={`text-danger`}>{errorMsg}</p>}
    </div>
  );
};

export default InputGroup;
