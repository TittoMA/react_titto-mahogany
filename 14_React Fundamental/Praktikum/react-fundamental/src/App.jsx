import { useState } from 'react';
import './styles/CreateProduct.css';
import Header from './components/Header';
import BootstrapLogo from './assets/img/bootstrap-logo.png';

function App() {
  return (
    <>
      <Header />
      <main>
        <div style={{ marginTop: 10 }} className='container'>
          <div className='row justify-content-center p-5'>
            <div className='col-12 col-md-9 d-flex flex-column align-items-center py-3'>
              <div className='mb-3'>
                <img src={BootstrapLogo} alt='bootstrap-logo' />
              </div>
              <h2>Create Product</h2>
              <p className='text-center'>
                Below is an example form built entirely with Bootstrap’s form
                controls. Each required form group has a validation state that
                can be triggered by attempting to submit the form without
                completing it.
              </p>
              <div className='row w-100 justify-content-center'>
                <div className='col-12 col-md-8'>
                  <form id='form-product' className='mt-5'>
                    <h3>Detail Product</h3>
                    <div id='product-name-field' className='mb-4'>
                      <label htmlFor='product-name' className='form-label'>
                        Product Name
                      </label>
                      <input
                        style={{ width: 282 }}
                        type='text'
                        className='form-control'
                        id='product-name'
                        name='product-name'
                      />
                      <div
                        id='product-name-feedback'
                        className='text-danger d-none'
                      >
                        Please fill out this field.
                      </div>
                    </div>
                    <div id='product-category-field' className='mb-4'>
                      <label htmlFor='product-category' className='form-label'>
                        Product Category
                      </label>
                      <select
                        style={{ width: 224 }}
                        id='product-category'
                        name='product-category'
                        className='form-select'
                        aria-label='Product Category'
                        defaultValue={''}
                      >
                        <option value=''>Choose...</option>
                        <option value='Class A'>Class A</option>
                        <option value='Class B'>Class B</option>
                        <option value='Class C'>Class C</option>
                      </select>
                      <div
                        id='product-category-feedback'
                        className='text-danger d-none'
                      >
                        Please fill out this field.
                      </div>
                    </div>
                    <div id='product-image-field' className='mb-4'>
                      <label htmlFor='product-image' className='form-label'>
                        Image of Product
                      </label>
                      <input
                        className='form-control input-image'
                        type='file'
                        id='product-image'
                        name='product-image'
                      />
                      <div
                        id='product-image-feedback'
                        className='text-danger d-none'
                      >
                        Please add image for product.
                      </div>
                    </div>
                    <div id='product-freshness-field' className='mb-4'>
                      <label className='mb-1'>Product Freshness</label>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='product-freshness'
                          id='product-freshness1'
                          defaultValue='Brand New'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='product-freshness1'
                        >
                          Brand New
                        </label>
                      </div>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='product-freshness'
                          id='product-freshness2'
                          defaultValue='Secondhand'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='product-freshness2'
                        >
                          Secondhand
                        </label>
                      </div>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='product-freshness'
                          id='product-freshness3'
                          defaultValue='Refurbished'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='product-freshness3'
                        >
                          Refurbished
                        </label>
                        <div
                          id='product-freshness-feedback'
                          className='text-danger d-none'
                        >
                          Please fill out this field.
                        </div>
                      </div>
                    </div>
                    <div id='product-description-field' className='mb-4'>
                      <label
                        htmlFor='product-description'
                        className='form-label'
                      >
                        Additional Description
                      </label>
                      <textarea
                        className='form-control'
                        id='product-description'
                        name='product-description'
                        rows={3}
                        defaultValue={''}
                      />
                      <div
                        id='product-description-feedback'
                        className='text-danger d-none'
                      >
                        Please add product description.
                      </div>
                    </div>
                    <div id='product-price-field' style={{ marginBottom: 138 }}>
                      <label htmlFor='product-price' className='form-label'>
                        Product Price
                      </label>
                      <div className='input-group'>
                        <span className='input-group-text'>$</span>
                        <input
                          type='number'
                          id='product-price'
                          name='product-price'
                          className='form-control'
                          placeholder='Price'
                          aria-label='Amount (to the nearest dollar)'
                          min={0}
                        />
                      </div>
                      <div
                        id='product-price-feedback'
                        className='text-danger d-none'
                      >
                        Please add price for product.
                      </div>
                    </div>
                    <div style={{ padding: '0 26px' }}>
                      <button
                        id='submit-button'
                        type='submit'
                        className='btn btn-primary w-100 disabled'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <h3 className='mb-2'>List Product</h3>
          <table
            id='product-table'
            className='table table-striped'
            style={{ marginBottom: 200 }}
          >
            <tbody>
              <tr>
                <th>No.</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Image of Product</th>
                <th>Product Freshness</th>
                <th>Additional Description</th>
                <th>Product Price</th>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
