import React from 'react';
import Header from '../../components/Header';
import BootstrapLogo from '../../assets/img/bootstrap-logo.png';
import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';
import InputFile from '../../components/InputFile';
import InputRadio from '../../components/InputRadio';
import InputArea from '../../components/InputArea';
import InputGroup from '../../components/InputGroup';
import ProductTable from '../../components/ProductTable';
import article from '../../article';
import useCreateProductViewModel from './CreateProduct.viewModel';

const CreateProduct = () => {
  const viewModel = useCreateProductViewModel();

  if (viewModel.loadingGetDetail) return <h1>Loading . . . </h1>;
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
              <h2>{article.title[viewModel.language]}</h2>
              <p className='text-center'>{article.description[viewModel.language]}</p>

              <div className='row w-100 justify-content-center'>
                <div className='col-12 col-md-8'>
                  <form id='form-product' onSubmit={viewModel.formik.handleSubmit} className='mt-5'>
                    <h3>Detail Product</h3>
                    <Input
                      label='Product Name'
                      type='text'
                      id='product-name'
                      name='productName'
                      onChange={viewModel.formik.handleChange}
                      value={viewModel.formik.values.productName}
                      onBlur={viewModel.formik.handleBlur}
                      isTouched={viewModel.formik.touched.productName}
                      errorMsg={viewModel.formik.errors.productName}
                    />
                    <InputSelect
                      label='Product Category'
                      id='product-category-field'
                      name='productCategory'
                      onChange={viewModel.formik.handleChange}
                      selectValue={viewModel.formik.values.productCategory}
                      onBlur={viewModel.formik.handleBlur}
                      isTouched={viewModel.formik.touched.productCategory}
                      errorMsg={viewModel.formik.errors.productCategory}
                      options={[
                        { value: 'Class A', label: 'Class A' },
                        { value: 'Class B', label: 'Class B' },
                        { value: 'Class C', label: 'Class C' },
                      ]}
                    />

                    <InputFile
                      label='Image of Product'
                      id='product-image'
                      name='productImage'
                      onChange={(event) => {
                        viewModel.formik.setFieldValue('productImage', event.currentTarget.files[0]);
                      }}
                      onBlur={viewModel.formik.handleBlur}
                      isTouched={viewModel.formik.touched.productImage}
                      errorMsg={viewModel.formik.errors.productImage}
                    />

                    <InputRadio
                      label='Product Freshness'
                      id='product-freshness'
                      name='productFreshness'
                      onChange={viewModel.formik.handleChange}
                      selectedValue={viewModel.formik.values.productFreshness}
                      onBlur={viewModel.formik.handleBlur}
                      isTouched={viewModel.formik.touched.productFreshness}
                      errorMsg={viewModel.formik.errors.productFreshness}
                      options={[
                        { value: 'Brand New', label: 'Brand New' },
                        { value: 'Secondhand', label: 'Secondhand' },
                        { value: 'Refurbished', label: 'Refurbished' },
                      ]}
                    />

                    <InputArea
                      label='Additional Description'
                      id='product-description'
                      name='productDescription'
                      rows={3}
                      placeholder='Please add product description.'
                      onChange={viewModel.formik.handleChange}
                      value={viewModel.formik.values.productDescription}
                      onBlur={viewModel.formik.handleBlur}
                      isTouched={viewModel.formik.touched.productDescription}
                      errorMsg={viewModel.formik.errors.productDescription}
                    />

                    <InputGroup
                      label='Product Price'
                      id='product-price'
                      name='productPrice'
                      placeholder='Price'
                      onChange={viewModel.formik.handleChange}
                      value={viewModel.formik.values.productPrice}
                      onBlur={viewModel.formik.handleBlur}
                      isTouched={viewModel.formik.touched.productPrice}
                      errorMsg={viewModel.formik.errors.productPrice}
                    />

                    <div style={{ padding: '0 26px', marginTop: 40 }}>
                      <button
                        id='submit-button'
                        type='submit'
                        className={`btn w-100 ${!viewModel.isEditing ? 'btn-primary' : 'btn-success'} ${
                          (viewModel.loadingInsert || viewModel.loadingUpdate) && 'disabled'
                        }`}
                      >
                        {viewModel.loadingInsert ? 'Loading' : !viewModel.isEditing ? 'Submit' : 'Update'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateProduct;
