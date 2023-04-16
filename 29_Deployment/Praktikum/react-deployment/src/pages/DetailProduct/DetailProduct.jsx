import React from 'react';
import useDetailProductviewModel from './DetailProduct.viewModel';
import { Navigate } from 'react-router-dom';

const DetailProduct = () => {
  const viewModel = useDetailProductviewModel();

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      {viewModel.loading ? (
        <h1>Loading . . .</h1>
      ) : !viewModel.data.product_by_pk ? (
        <Navigate to='/404' />
      ) : (
        <div className='d-flex flex-column w-100'>
          <div className='card shadow-lg'>
            <h5 className='card-header'>Detail Product</h5>
            <div className='card-body'>
              <h3 className='card-title'>{viewModel.data.product_by_pk.product_name}</h3>
              <p className='card-text'>{viewModel.data.product_by_pk.additional_description}</p>
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                Category:{' '}
                <span className='badge bg-primary'>{viewModel.data.product_by_pk.product_category}</span>
              </li>
              <li className='list-group-item'>
                Freshness:{' '}
                <span className='badge bg-primary'>{viewModel.data.product_by_pk.product_freshness}</span>{' '}
              </li>
              <li className='list-group-item'>
                Price:{' '}
                <span className='badge bg-primary'>$ {viewModel.data.product_by_pk.product_price}</span>
              </li>
            </ul>
          </div>

          <div className='d-flex gap-2 mt-4 justify-content-end'>
            <a href={`/create-product/${viewModel.data.product_by_pk.id}`} className='btn btn-warning'>
              Edit
            </a>
            <button className='btn btn-danger' onClick={viewModel.handleDelete}>
              Delete
            </button>
          </div>

          <div className='mt-4'>
            <h3 className='mb-3'>Comments ({viewModel.dataComments?.comments.length})</h3>
            <textarea
              value={viewModel.inputComment}
              onChange={viewModel.onChangeComment}
              placeholder='write your comment...'
              className='form-control shadow mb-2'
              style={{ border: '1px solid black', height: 100 }}
            />
            {viewModel.loadingInsertComment ? (
              <h4>Loading . . .</h4>
            ) : (
              <button className='btn btn-primary mb-4 ' onClick={viewModel.handleSubmitComment}>
                Submit
              </button>
            )}

            {viewModel.loadingComments ? (
              <h5>Loading...</h5>
            ) : (
              viewModel.dataComments.comments.map((item) => (
                <div key={item.id} className='card shadow-lg mb-2'>
                  <div className='card-body'>
                    <h5>{item.name}</h5>
                    <p>{item.comment}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
