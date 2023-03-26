import React from 'react';

const InputRadio = ({ label, id, name, options, onChange, selectedValue, errorMsg, isTouched, ...props }) => {
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label className='mb-1'>{label}</label>

      {options.map((option, index) => (
        <div className='form-check' key={index}>
          <input
            {...props}
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

          {index == options.length - 1 && errorMsg && isTouched && (
            <p className={`text-danger`}>{errorMsg}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default InputRadio;
