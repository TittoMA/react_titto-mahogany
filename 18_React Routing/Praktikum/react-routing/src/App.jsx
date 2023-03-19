import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import LandingPage from './pages/LandingPage';
import DetailProduct from './pages/DetailProduct';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/create-product'
          element={
            <PrivateRoute>
              <CreateProduct />
            </PrivateRoute>
          }
        />
        <Route path='/product/:productId' element={<DetailProduct />} />
        <Route
          path='*'
          element={
            <div className='d-flex justify-content-center align-items-center min-vh-100'>
              <h1>404 Not Found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
