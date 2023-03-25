import React from 'react';

function InputFile({ label, id, name, type }) {
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <input
        className='form-control input-image'
        type='file'
        id={id}
        name={name}
      />
      <div id={`${id}-feedback`} className='text-danger d-none'>
        Please add image for product.
      </div>
    </div>
  );
}

export default InputFile;
