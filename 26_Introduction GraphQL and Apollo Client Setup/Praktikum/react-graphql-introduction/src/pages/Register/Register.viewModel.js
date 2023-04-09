import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userAction } from '../../config/redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useRegisterViewModel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      navigate('/create-product');
    }
  }, []);

  const handleRegister = (data) => {
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
      password: data.password,
    };
    dispatch(userAction.registerUser(userData));
    alert(`REGISTER SUCCESS!`);
    navigate('/login');
  };
  return { formik };
};

export default useRegisterViewModel;
