import React from 'react';
import useLoginViewModel from './Login.viewModel';

const Login = () => {
  const viewModel = useLoginViewModel();
  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card w-50 shadow-lg'>
        <h5 className='card-header text-center'>Login</h5>
        <div className='card-body'>
          <form onSubmit={viewModel.formik.handleSubmit}>
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
