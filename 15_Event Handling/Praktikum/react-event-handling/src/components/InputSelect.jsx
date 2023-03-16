import React from 'react';

const InputSelect = ({
  label,
  id,
  name,
  options,
  onChange,
  selectValue,
  validation,
}) => {
  const inputBorder = validation.isValid ? '#dee2e6' : 'red';
  return (
    <div id={`${id}-field`} className='mb-4'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <select
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
      <div
        id={`${id}-feedback`}
        className={`text-danger ${validation.isValid && 'd-none'}`}
      >
        {validation.message}
      </div>
    </div>
  );
};

export default InputSelect;
