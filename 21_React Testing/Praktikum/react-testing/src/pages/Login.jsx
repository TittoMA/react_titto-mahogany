import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
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

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card w-50 shadow-lg'>
        <h5 className='card-header text-center'>Login</h5>
        <div className='card-body'>
          <form onSubmit={formik.handleSubmit}>
            <div className='mb-3'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <p className={`text-danger`}>{formik.errors.email}</p>
              )}
            </div>

            <div className='mb-3'>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password && (
                <p className={`text-danger`}>{formik.errors.password}</p>
              )}
            </div>

            <button type='submit' className='btn btn-success'>
              Login
            </button>
          </form>

          <a href='/register' className='d-inline-block mt-3'>
            Go to register page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
