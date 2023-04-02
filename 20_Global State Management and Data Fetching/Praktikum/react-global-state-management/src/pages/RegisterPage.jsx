import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {
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
  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card w-50 shadow-lg'>
        <h5 className='card-header text-center'>Register</h5>
        <div className='card-body'>
          <form onSubmit={formik.handleSubmit}>
            <div className='mb-3'>
              <label>First Name</label>
              <input
                type='text'
                className='form-control'
                name='firstName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className={`text-danger`}>{formik.errors.firstName}</p>
              )}
            </div>

            <div className='mb-3'>
              <label>Last Name</label>
              <input
                type='text'
                className='form-control'
                name='lastName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <p className={`text-danger`}>{formik.errors.lastName}</p>
              )}
            </div>

            <div className='mb-3'>
              <label>Username</label>
              <input
                type='text'
                className='form-control'
                name='username'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.errors.username && formik.touched.username && (
                <p className={`text-danger`}>{formik.errors.username}</p>
              )}
            </div>

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

            <div className='mb-3'>
              <label>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                name='confirmPassword'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <p className={`text-danger`}>{formik.errors.confirmPassword}</p>
              )}
            </div>

            <button type='submit' className='btn btn-success'>
              Login
            </button>
          </form>

          <a href='/login' className='d-inline-block mt-3'>
            Go to login page
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
