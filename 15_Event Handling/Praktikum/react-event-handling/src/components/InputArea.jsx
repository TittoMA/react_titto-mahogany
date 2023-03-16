import React from 'react';

const InputArea = ({
  label,
  id,
  name,
  rows,
  placeholder,
  onChange,
  value,
  validation,
}) => {
  const inputBorder = validation.isValid ? '#dee2e6' : 'red';
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <textarea
        style={{ borderColor: inputBorder }}
        className='form-control'
        id={id}
        name={name}
        rows={rows}
        onChange={onChange}
        value={value}
      >
        {placeholder}
      </textarea>
      <div
        id={`${id}-feedback`}
        className={`text-danger ${validation.isValid && 'd-none'}`}
      >
        {validation.message}
      </div>
    </div>
  );
};

export default InputArea;
