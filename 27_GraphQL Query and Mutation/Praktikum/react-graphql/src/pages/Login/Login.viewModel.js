import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUserListSelector } from '../../config/redux/user/userSelector';

const useLoginViewModel = () => {
  const navigate = useNavigate();
  const userList = useUserListSelector();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      navigate('/create-product');
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Required'),
      password: Yup.string().min(8).required('Required'),
    }),
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = (data) => {
    const userData = userList.find((user) => user.username === data.username);

    if (!userData) {
      alert(`User with username ${data.username} not found!`);
    } else {
      if (data.password === userData.password) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('USER_DATA', userData);
        alert('LOGIN SUCCESS');
        navigate('/create-product');
      } else {
        alert('Incorrect password!');
      }
    }
  };

  return { formik };
};

export default useLoginViewModel;
