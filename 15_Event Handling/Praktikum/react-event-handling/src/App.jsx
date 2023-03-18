import { useState } from 'react';
// import './styles/CreateProduct.css';
import Header from './components/Header';
import BootstrapLogo from './assets/img/bootstrap-logo.png';
import Input from './components/Input';
import InputSelect from './components/InputSelect';
import InputFile from './components/InputFile';
import InputRadio from './components/InputRadio';
import InputArea from './components/InputArea';
import InputGroup from './components/InputGroup';
import article from './article';

function App() {
  const [language, setLanguage] = useState('en');
  const [formProduct, setFormProduct] = useState({
    productName: '',
    productCategory: '',
    productDescription: '',
    productPrice: '',
  });
  const [formValidation, setFormValidation] = useState({
    productName: {
      isValid: false,
      message: '',
    },
    productCategory: {
      isValid: false,
      message: '',
    },
    productDescription: {
      isValid: false,
      message: '',
    },
    productPrice: {
      isValid: false,
      message: '',
    },
  });

  const generateNumber = () => {
    console.log('RANDOM NUMBER: ', Math.floor(Math.random() * 101));
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const onChangeProductName = (e) => {
    onChangeInput(e);
    const value = e.target.value;
    if (value.length < 1) {
      setFormValidation({
        ...formValidation,
        productName: {
          isValid: false,
          message: 'This field cannot be empty',
        },
      });
    } else if (value.length <= 10) {
      setFormValidation({
        ...formValidation,
        productName: {
          isValid: true,
          message: '',
        },
      });
    } else {
      setFormValidation({
        ...formValidation,
        productName: {
          isValid: false,
          message: 'Product name cannot exceed 10 characters',
        },
      });
    }
  };

  const validation = () => {
    const validObj = { ...formValidation };
    Object.entries(formProduct).forEach((entry) => {
      const [key, value] = entry;
      validObj[key] = {
        isValid: value === '' ? false : true,
        message: value === '' ? 'This field cannot be empty' : '',
      };
    });
    setFormValidation({ ...validObj });

    return validObj;
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    setFormProduct({ ...formProduct, [e.target.name]: value });
    setFormValidation({
      ...formValidation,
      [e.target.name]: {
        isValid: value === '' ? false : true,
        message: value === '' ? 'This field cannot be empty' : '',
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validObj = validation();

    const isValid = Object.values(validObj).every(
      (value) => value.isValid === true
    );
    if (isValid) alert('SUCCESS INPUT DATA');
  };

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
              <h2>{article.title[language]}</h2>
              <p className='text-center'>{article.description[language]}</p>

              <div className='d-flex gap-2 w-100 justify-content-center'>
                <button
                  onClick={() =>
                    changeLanguage(language === 'en' ? 'id' : 'en')
                  }
                  className='btn btn-primary'
                >
                  {language === 'en' ? 'Change Language' : 'Ganti Bahasa'}
                </button>
                <button onClick={generateNumber} className='btn btn-success'>
                  Generate Random Number
                </button>
              </div>
              <div className='row w-100 justify-content-center'>
                <div className='col-12 col-md-8'>
                  <form
                    id='form-product'
                    onSubmit={handleSubmit}
                    className='mt-5'
                  >
                    <h3>Detail Product</h3>
                    <Input
                      label='Product Name'
                      type='text'
                      id='product-name'
                      name='productName'
                      onChange={onChangeProductName}
                      value={formProduct.productName}
                      validation={formValidation.productName}
                    />
                    <InputSelect
                      label='Product Category'
                      id='product-category-field'
                      name='productCategory'
                      onChange={onChangeInput}
                      selectValue={formProduct.productCategory}
                      validation={formValidation.productCategory}
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
                    />

                    <InputRadio
                      label='Product Freshness'
                      id='product-freshness'
                      name='productFreshness'
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
                      onChange={onChangeInput}
                      value={formProduct.productDescription}
                      validation={formValidation.productDescription}
                    />

                    <InputGroup
                      label='Product Price'
                      id='product-price'
                      name='productPrice'
                      placeholder='Price'
                      onChange={onChangeInput}
                      value={formProduct.productPrice}
                      validation={formValidation.productPrice}
                    />

                    <div style={{ padding: '0 26px', marginTop: 138 }}>
                      <button
                        id='submit-button'
                        type='submit'
                        className='btn btn-primary w-100'
                      >
                        Submit
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
}

export default App;
