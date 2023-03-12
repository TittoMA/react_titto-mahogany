import React from 'react';

const InputSelect = ({ label, id, name, options }) => {
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <select
        style={{ width: 224 }}
        id={id}
        name={name}
        className='form-select'
        aria-label={label}
        defaultValue={''}
      >
        <option value=''>Choose...</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div id={`${id}-feedback`} className='text-danger d-none'>
        Please fill out this field.
      </div>
    </div>
  );
};

export default InputSelect;
