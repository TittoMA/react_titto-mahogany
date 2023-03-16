import React from 'react';

const InputGroup = ({
  label,
  id,
  name,
  placeholder,
  onChange,
  value,
  validation,
}) => {
  const inputBorder = validation.isValid ? '#dee2e6' : 'red';
  return (
    <div id={`${id}-field`}>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <div className='input-group'>
        <span className='input-group-text'>$</span>
        <input
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
      <div
        id={`${id}-feedback`}
        className={`text-danger ${validation.isValid && 'd-none'}`}
      >
        {validation.message}
      </div>
    </div>
  );
};

export default InputGroup;
