import { useState, useEffect } from 'react';

const useValidation = (value, maxLength = null) => {
  const [isValid, setIsValid] = useState(true);
  const [isChecking, setIsChecking] = useState(false);
  const [message, setMessage] = useState('');

  const validate = (value = true) => {
    setIsChecking(value);
  };

  useEffect(() => {
    if (isChecking) {
      if (value === '') {
        setIsValid(false);
        setMessage("This field can't be empty!");
      } else {
        setIsValid(true);
        setMessage('');
      }

      if (maxLength !== null && value.length > maxLength) {
        setIsValid(false);
        setMessage(`This field can't exceed ${maxLength} characters!`);
      }

      setIsChecking(false);
    }
  }, [value, isChecking]);

  return [isValid, message, validate];
};

export default useValidation;
