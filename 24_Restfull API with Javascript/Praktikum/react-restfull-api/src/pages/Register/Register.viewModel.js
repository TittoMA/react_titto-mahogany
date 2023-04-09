import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useRegisterViewModel = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().min(3).required('Required'),
      lastName: Yup.string().nullable(),
      username: Yup.string().min(2).required('Required'),
      email: Yup.string().email().required('Required'),
      password: Yup.string().min(8).required('Required'),
      confirmPassword: Yup.string()
        .min(8)
        .required('Required')
        .test(
          'valid',
          'Confirm password does not match password!',
          (value) => value === formik.values.password
        ),
    }),
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = (data) => {
    alert(`REGISTER SUCCESS
    First Name: ${data.firstName}
    Last Name: ${data.lastName}
    Username: ${data.username}
    Email: ${data.email}
    Password: ${data.password}
    Confirm Password: ${data.confirmPassword}
    `);
  };
  return { formik };
};

export default useRegisterViewModel;
