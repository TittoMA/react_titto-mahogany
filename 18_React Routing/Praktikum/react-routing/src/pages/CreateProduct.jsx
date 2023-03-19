import { useState, useEffect } from 'react';
import Header from '../components/Header';
import BootstrapLogo from '../assets/img/bootstrap-logo.png';
import Input from '../components/Input';
import InputSelect from '../components/InputSelect';
import InputFile from '../components/InputFile';
import InputRadio from '../components/InputRadio';
import InputArea from '../components/InputArea';
import InputGroup from '../components/InputGroup';
import ProductTable from '../components/ProductTable';
import useValidation from '../hooks/useValidation';
import article from '../article';

const CreateProduct = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [language, setLanguage] = useState('en');
  const [formProduct, setFormProduct] = useState({
    productName: '',
    productCategory: '',
    productFreshness: '',
    productDescription: '',
    productPrice: '',
  });
  const [dataProduct, setDataProduct] = useState([]);
  const [isNameValid, nameValidMsg, nameValidate] = useValidation(formProduct.productName, 10);
  const [isCategoryValid, categoryValidMsg, categoryValidate] = useValidation(formProduct.productCategory);
  const [isDescriptionValid, descriptionValidMsg, descriptionValidate] = useValidation(
    formProduct.productDescription
  );
  const [isPriceValid, priceValidMsg, priceValidate] = useValidation(formProduct.productPrice);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('dataProduct'));
    setDataProduct(products);
    alert('Welcome');
  }, []);

  const generateNumber = () => {
    console.log('RANDOM NUMBER: ', Math.floor(Math.random() * 101));
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const onChangeInput = (e, validate = null) => {
    const value = e.target.value;
    setFormProduct({ ...formProduct, [e.target.name]: value });
    if (validate !== null) validate();
  };

  const resetForm = () => {
    setFormProduct({
      productName: '',
      productCategory: '',
      productFreshness: '',
      productDescription: '',
      productPrice: '',
    });
  };

  const validateAll = (value = true) => {
    nameValidate(value);
    categoryValidate(value);
    descriptionValidate(value);
    priceValidate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAll();
    const validArr = [isNameValid, isCategoryValid, isDescriptionValid, isPriceValid];
    const isValid = validArr.every((value) => value === true);

    if (isValid) {
      const dataArr = [...dataProduct];
      const inputData = {
        name: formProduct.productName,
        category: formProduct.productCategory,
        freshness: formProduct.productFreshness,
        description: formProduct.productDescription,
        price: formProduct.productPrice,
      };
      if (!isEditing) {
        dataArr.push(inputData);
      } else {
        dataArr.splice(selectedIndex, 1, inputData);
        setIsEditing(false);
        setSelectedIndex(null);
      }

      setDataProduct(dataArr);
      localStorage.setItem('dataProduct', JSON.stringify(dataArr));
      validateAll(false);
      resetForm();
    }
  };

  const handleDelete = (index) => {
    console.log(index);
    if (confirm('Apakah anda yakin ingin menghapus data ini?')) {
      const dataArr = [...dataProduct];
      dataArr.splice(index, 1);
      setDataProduct(dataArr);
      localStorage.setItem('dataProduct', JSON.stringify(dataArr));
    }
  };

  const handleEdit = (index) => {
    console.log('EDIT', index);
    const selectedData = { ...dataProduct[index] };
    setSelectedIndex(index);
    setIsEditing(true);
    setFormProduct({
      productName: selectedData.name,
      productCategory: selectedData.category,
      productFreshness: selectedData.freshness,
      productDescription: selectedData.description,
      productPrice: selectedData.price,
    });
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
                  onClick={() => changeLanguage(language === 'en' ? 'id' : 'en')}
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
                  <form id='form-product' onSubmit={handleSubmit} className='mt-5'>
                    <h3>Detail Product</h3>
                    <Input
                      label='Product Name'
                      type='text'
                      id='product-name'
                      name='productName'
                      onChange={(e) => onChangeInput(e, nameValidate)}
                      value={formProduct.productName}
                      isValid={isNameValid}
                      validMsg={nameValidMsg}
                    />
                    <InputSelect
                      label='Product Category'
                      id='product-category-field'
                      name='productCategory'
                      onChange={(e) => onChangeInput(e, categoryValidate)}
                      selectValue={formProduct.productCategory}
                      isValid={isCategoryValid}
                      validMsg={categoryValidMsg}
                      options={[
                        { value: 'Class A', label: 'Class A' },
                        { value: 'Class B', label: 'Class B' },
                        { value: 'Class C', label: 'Class C' },
                      ]}
                    />

                    <InputFile label='Image of Product' id='product-image' name='productImage' />

                    <InputRadio
                      label='Product Freshness'
                      id='product-freshness'
                      name='productFreshness'
                      onChange={onChangeInput}
                      selectedValue={formProduct.productFreshness}
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
                      onChange={(e) => onChangeInput(e, descriptionValidate)}
                      value={formProduct.productDescription}
                      isValid={isDescriptionValid}
                      validMsg={descriptionValidMsg}
                    />

                    <InputGroup
                      label='Product Price'
                      id='product-price'
                      name='productPrice'
                      placeholder='Price'
                      onChange={(e) => onChangeInput(e, priceValidate)}
                      value={formProduct.productPrice}
                      isValid={isPriceValid}
                      validMsg={priceValidMsg}
                    />

                    <div style={{ padding: '0 26px', marginTop: 40 }}>
                      <button
                        id='submit-button'
                        type='submit'
                        className={`btn w-100 ${!isEditing ? 'btn-primary' : 'btn-success'}`}
                      >
                        {!isEditing ? 'Submit' : 'Update'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <ProductTable data={dataProduct} onDelete={handleDelete} onEdit={handleEdit} />
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateProduct;
