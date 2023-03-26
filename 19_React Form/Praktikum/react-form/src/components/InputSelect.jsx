import React from 'react';

const InputSelect = ({ label, id, name, options, onChange, selectValue, isTouched, errorMsg, ...props }) => {
  const inputBorder = errorMsg && isTouched ? 'red' : '#dee2e6';
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <select
        {...props}
        style={{ width: 224, borderColor: inputBorder }}
        id={id}
        name={name}
        className='form-select'
        onChange={onChange}
        value={selectValue}
      >
        <option value=''>Choose...</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMsg && isTouched && <p className={`text-danger`}>{errorMsg}</p>}
    </div>
  );
};

export default InputSelect;
