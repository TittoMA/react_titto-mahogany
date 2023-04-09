import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useLoginViewModel = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required('Required'),
      password: Yup.string().min(8).required('Required'),
    }),
    onSubmit: (values) => {
      handleLogin(values.email);
    },
  });

  const handleLogin = (email) => {
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('user', email);
    alert('LOGIN SUCCESS');
    navigate('/create-product');
  };

  return { formik };
};

export default useLoginViewModel;
