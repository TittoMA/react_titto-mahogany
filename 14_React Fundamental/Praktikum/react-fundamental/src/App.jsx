import './styles/CreateProduct.css';
import Header from './components/Header';
import BootstrapLogo from './assets/img/bootstrap-logo.png';
import ProductTable from './components/ProductTable';
import Input from './components/Input';
import InputSelect from './components/InputSelect';
import InputFile from './components/InputFile';
import InputRadio from './components/InputRadio';
import InputArea from './components/InputArea';
import InputGroup from './components/InputGroup';

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
                    <Input
                      label='Product Name'
                      type='text'
                      id='product-name'
                      name='product-name'
                    />

                    <InputSelect
                      label='Product Category'
                      id='product-category-field'
                      name='product-category-field'
                      options={[
                        { value: 'Class A', label: 'Class A' },
                        { value: 'Class B', label: 'Class B' },
                        { value: 'Class C', label: 'Class C' },
                      ]}
                    />

                    <InputFile
                      label='Image of Product'
                      id='product-image'
                      name='product-image'
                    />

                    <InputRadio
                      label='Product Freshness'
                      id='product-freshness'
                      name='product-freshness'
                      options={[
                        { value: 'Brand New', label: 'Brand New' },
                        { value: 'Secondhand', label: 'Secondhand' },
                        { value: 'Refurbished', label: 'Refurbished' },
                      ]}
                    />

                    <InputArea
                      label='Additional Description'
                      id='product-description'
                      name='product-description'
                      rows={3}
                      placeholder='Please add product description.'
                    />

                    <InputGroup
                      label='Product Price'
                      id='product-price'
                      name='product-price'
                      placeholder='Price'
                    />

                    <div style={{ padding: '0 26px', marginTop: 138 }}>
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
          <ProductTable />
        </div>
      </main>
    </>
  );
}

export default App;
