import React from 'react';

function InputFile({ label, id, name, type, value, isTouched, errorMsg, ...props }) {
  const inputBorder = errorMsg && isTouched ? 'red' : '#dee2e6';
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <input
        {...props}
        style={{ borderColor: inputBorder }}
        className='form-control input-image'
        type='file'
        id={id}
        name={name}
        value={value}
      />
      {errorMsg && isTouched && <p className={`text-danger`}>{errorMsg}</p>}
    </div>
  );
}

export default InputFile;
