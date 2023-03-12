import React from 'react';

const InputArea = ({ label, id, name, rows, placeholder }) => {
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <textarea
        className='form-control'
        id={id}
        name={name}
        rows={rows}
        defaultValue={''}
      />
      <div id={`${id}-feedback`} className='text-danger d-none'>
        {placeholder}
      </div>
    </div>
  );
};

export default InputArea;
