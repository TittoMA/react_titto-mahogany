import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useProductListSelector } from '../../config/redux/product/productSelector';
import { productAction } from '../../config/redux/product/productSlice';

const useCreateProductViewModel = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [language, setLanguage] = useState('en');

  // REDUX
  const dispatch = useDispatch();
  const productList = useProductListSelector();

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
    onSubmit: (values, { resetForm }) => {
      const data = {
        id: uuidv4(),
        productName: values.productName,
        productCategory: values.productCategory,
        productFreshness: values.productFreshness,
        productPrice: values.productPrice,
        image: values.productImage.name,
        additionalDescription: values.productDescription,
      };
      handleSubmit(data);
      resetForm();
      formik.setFieldValue('productImage', undefined);
    },
  });

  const handleSubmit = (newData) => {
    if (!isEditing) {
      dispatch(productAction.add(newData));
    } else {
      const index = productList.findIndex((product) => product.id === selectedId);
      const dataArr = [...productList];
      dataArr.splice(index, 1, newData);
      dispatch(productAction.edit(dataArr));
      setIsEditing(false);
      setSelectedId(null);
    }

    alert('SUCCESS SUBMIT PRODUCT');
  };

  const handleDelete = (id) => {
    console.log(id);
    if (confirm('Apakah anda yakin ingin menghapus data ini?')) {
      const index = productList.findIndex((product) => product.id === id);
      const dataArr = [...productList];
      dataArr.splice(index, 1);
      dispatch(productAction.delete(dataArr));

      if (id === selectedId) {
        setIsEditing(false);
        setSelectedId(null);
        formik.resetForm();
      }
    }
  };

  const handleEdit = (id) => {
    console.log('EDIT', id);
    const selectedData = productList.find((product) => product.id === id);
    console.log(selectedData);
    setSelectedId(id);
    setIsEditing(true);
    formik.setFieldValue('productName', selectedData.productName);
    formik.setFieldValue('productCategory', selectedData.productCategory);
    formik.setFieldValue('productImage', undefined);
    formik.setFieldValue('productFreshness', selectedData.productFreshness);
    formik.setFieldValue('productDescription', selectedData.additionalDescription);
    formik.setFieldValue('productPrice', selectedData.productPrice);
  };

  return {
    // DATA
    isEditing,
    language,
    productList,

    // FUNCTION
    formik,
    handleSubmit,
    handleDelete,
    handleEdit,
  };
};

export default useCreateProductViewModel;
