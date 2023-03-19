import React from 'react';

const InputRadio = ({ label, id, name, options, onChange, selectedValue }) => {
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label className='mb-1'>{label}</label>

      {options.map((option, index) => (
        <div className='form-check' key={index}>
          <input
            className='form-check-input'
            type='radio'
            name={name}
            id={`${id}-${index + 1}`}
            value={option.value}
            onChange={onChange}
            checked={selectedValue == option.value}
          />
          <label className='form-check-label' htmlFor={`${id}-${index + 1}`}>
            {option.label}
          </label>

          {index == options.length - 1 && (
            <div id={`${id}-feedback`} className='text-danger d-none'>
              Please fill out this field.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InputRadio;
