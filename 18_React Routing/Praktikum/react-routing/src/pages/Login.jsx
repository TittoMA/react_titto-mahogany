import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', true);
    alert('LOGIN SUCCESS');
    navigate('/create-product');
  };

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card w-50 shadow-lg'>
        <h5 className='card-header text-center'>Login</h5>
        <div className='card-body'>
          <h3 className='card-title'>Press the button to login</h3>
          <button onClick={handleLogin} className='btn btn-success'>
            Go Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
