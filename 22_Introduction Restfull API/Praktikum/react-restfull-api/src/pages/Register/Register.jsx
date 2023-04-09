import React from 'react';
import useRegisterViewModel from './Register.viewModel';

const Register = () => {
  const viewModel = useRegisterViewModel();
  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card w-50 shadow-lg'>
        <h5 className='card-header text-center'>Register</h5>
        <div className='card-body'>
          <form onSubmit={viewModel.formik.handleSubmit}>
            <div className='mb-3'>
              <label>First Name</label>
              <input
                type='text'
                className='form-control'
                name='firstName'
                onChange={viewModel.formik.handleChange}
                onBlur={viewModel.formik.handleBlur}
                value={viewModel.formik.values.firstName}
              />
              {viewModel.formik.errors.firstName && viewModel.formik.touched.firstName && (
                <p className={`text-danger`}>{viewModel.formik.errors.firstName}</p>
              )}
            </div>

            <div className='mb-3'>
              <label>Last Name</label>
              <input
                type='text'
                className='form-control'
                name='lastName'
                onChange={viewModel.formik.handleChange}
                onBlur={viewModel.formik.handleBlur}
                value={viewModel.formik.values.lastName}
              />
              {viewModel.formik.errors.lastName && viewModel.formik.touched.lastName && (
                <p className={`text-danger`}>{viewModel.formik.errors.lastName}</p>
              )}
            </div>

            <div className='mb-3'>
              <label>Username</label>
              <input
                type='text'
                className='form-control'
                name='username'
                onChange={viewModel.formik.handleChange}
                onBlur={viewModel.formik.handleBlur}
                value={viewModel.formik.values.username}
              />
              {viewModel.formik.errors.username && viewModel.formik.touched.username && (
                <p className={`text-danger`}>{viewModel.formik.errors.username}</p>
              )}
            </div>

            <div className='mb-3'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                name='email'
                onChange={viewModel.formik.handleChange}
                onBlur={viewModel.formik.handleBlur}
                value={viewModel.formik.values.email}
              />
              {viewModel.formik.errors.email && viewModel.formik.touched.email && (
                <p className={`text-danger`}>{viewModel.formik.errors.email}</p>
              )}
            </div>

            <div className='mb-3'>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                onChange={viewModel.formik.handleChange}
                onBlur={viewModel.formik.handleBlur}
                value={viewModel.formik.values.password}
              />
              {viewModel.formik.errors.password && viewModel.formik.touched.password && (
                <p className={`text-danger`}>{viewModel.formik.errors.password}</p>
              )}
            </div>

            <div className='mb-3'>
              <label>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                name='confirmPassword'
                onChange={viewModel.formik.handleChange}
                onBlur={viewModel.formik.handleBlur}
                value={viewModel.formik.values.confirmPassword}
              />
              {viewModel.formik.errors.confirmPassword && viewModel.formik.touched.confirmPassword && (
                <p className={`text-danger`}>{viewModel.formik.errors.confirmPassword}</p>
              )}
            </div>

            <button type='submit' className='btn btn-success'>
              Register
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

export default Register;
