import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import BootstrapLogo from '../assets/img/bootstrap-logo.png';
import Input from '../components/Input';
import InputSelect from '../components/InputSelect';
import InputFile from '../components/InputFile';
import InputRadio from '../components/InputRadio';
import InputArea from '../components/InputArea';
import InputGroup from '../components/InputGroup';
import ProductTable from '../components/ProductTable';
import article from '../article';

const CreateProduct = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [language, setLanguage] = useState('en');
  const [dataProduct, setDataProduct] = useState([]);

  const formik = useFormik({
    initialValues: {
      productName: '',
      productCategory: '',
      productFreshness: '',
      productDescription: '',
      productPrice: '',
      productImage: undefined,
    },
    validationSchema: Yup.object().shape({
      productName: Yup.string().min(2).max(50).required('Required'),
      productCategory: Yup.string().required('Required'),
      productFreshness: Yup.string().required('Required'),
      productDescription: Yup.string().min(2).required('Required'),
      productPrice: Yup.string().required('Required'),
      productImage: Yup.mixed()
        .test('required', 'Please upload a product image', (value) => {
          return value != undefined;
        })
        .test('type', 'Unsupported File Format', (value) => {
          return (
            value && (value.type === 'image/jpg' || value.type === 'image/jpeg' || value.type === 'image/png')
          );
        }),
    }),
    onSubmit: (values) => {
      const data = {
        name: values.productName,
        category: values.productCategory,
        image: values.productImage.name,
        freshness: values.productFreshness,
        description: values.productDescription,
        price: values.productPrice,
      };
      handleSubmit(data);
    },
  });

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('dataProduct'));
    if (products) {
      setDataProduct(products);
    }
  }, []);

  const resetForm = () => {
    formik.setFieldValue('productName', '');
    formik.setFieldValue('productCategory', '');
    formik.setFieldValue('productImage', undefined);
    formik.setFieldValue('productFreshness', '');
    formik.setFieldValue('productDescription', '');
    formik.setFieldValue('productPrice', '');
  };

  const handleSubmit = (newData) => {
    const dataArr = [...dataProduct];

    if (!isEditing) {
      dataArr.push(newData);
    } else {
      dataArr.splice(selectedIndex, 1, newData);
      setIsEditing(false);
      setSelectedIndex(null);
    }

    setDataProduct(dataArr);
    localStorage.setItem('dataProduct', JSON.stringify(dataArr));
    resetForm();
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
    console.log(selectedData);
    setSelectedIndex(index);
    setIsEditing(true);
    formik.setFieldValue('productName', selectedData.name);
    formik.setFieldValue('productCategory', selectedData.category);
    formik.setFieldValue('productImage', undefined);
    formik.setFieldValue('productFreshness', selectedData.freshness);
    formik.setFieldValue('productDescription', selectedData.description);
    formik.setFieldValue('productPrice', selectedData.price);
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

              <div className='row w-100 justify-content-center'>
                <div className='col-12 col-md-8'>
                  <form id='form-product' onSubmit={formik.handleSubmit} className='mt-5'>
                    <h3>Detail Product</h3>
                    <Input
                      label='Product Name'
                      type='text'
                      id='product-name'
                      name='productName'
                      onChange={formik.handleChange}
                      value={formik.values.productName}
                      onBlur={formik.handleBlur}
                      isTouched={formik.touched.productName}
                      errorMsg={formik.errors.productName}
                    />
                    <InputSelect
                      label='Product Category'
                      id='product-category-field'
                      name='productCategory'
                      onChange={formik.handleChange}
                      selectValue={formik.values.productCategory}
                      onBlur={formik.handleBlur}
                      isTouched={formik.touched.productCategory}
                      errorMsg={formik.errors.productCategory}
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
                        formik.setFieldValue('productImage', event.currentTarget.files[0]);
                      }}
                      onBlur={formik.handleBlur}
                      isTouched={formik.touched.productImage}
                      errorMsg={formik.errors.productImage}
                    />

                    <InputRadio
                      label='Product Freshness'
                      id='product-freshness'
                      name='productFreshness'
                      onChange={formik.handleChange}
                      selectedValue={formik.values.productFreshness}
                      onBlur={formik.handleBlur}
                      isTouched={formik.touched.productFreshness}
                      errorMsg={formik.errors.productFreshness}
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
                      onChange={formik.handleChange}
                      value={formik.values.productDescription}
                      onBlur={formik.handleBlur}
                      isTouched={formik.touched.productDescription}
                      errorMsg={formik.errors.productDescription}
                    />

                    <InputGroup
                      label='Product Price'
                      id='product-price'
                      name='productPrice'
                      placeholder='Price'
                      onChange={formik.handleChange}
                      value={formik.values.productPrice}
                      onBlur={formik.handleBlur}
                      isTouched={formik.touched.productPrice}
                      errorMsg={formik.errors.productPrice}
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
