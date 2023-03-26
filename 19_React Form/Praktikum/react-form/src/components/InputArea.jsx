import React from 'react';

const InputArea = ({
  label,
  id,
  name,
  rows,
  placeholder,
  onChange,
  value,
  isTouched,
  errorMsg,
  ...props
}) => {
  const inputBorder = errorMsg && isTouched ? 'red' : '#dee2e6';
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <textarea
        {...props}
        style={{ borderColor: inputBorder }}
        className='form-control'
        id={id}
        name={name}
        rows={rows}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {errorMsg && isTouched && <p className={`text-danger`}>{errorMsg}</p>}
    </div>
  );
};

export default InputArea;
