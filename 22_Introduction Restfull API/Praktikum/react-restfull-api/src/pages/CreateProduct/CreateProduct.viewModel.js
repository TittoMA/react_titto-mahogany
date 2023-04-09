import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  useProductListSelector,
  useProductLoadingSelector,
} from '../../config/redux/product/productSelector';
import {
  retreiveProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../../config/redux/product/productThunk';

const useCreateProductViewModel = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [language, setLanguage] = useState('en');

  // REDUX
  const dispatch = useDispatch();
  const productList = useProductListSelector();
  const loading = useProductLoadingSelector();

  useEffect(() => {
    dispatch(retreiveProduct());
  }, []);

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

  const handleSubmit = async (data) => {
    if (!isEditing) {
      await dispatch(addProduct(data));
    } else {
      await dispatch(updateProduct({ productId: selectedId, productData: data }));
      setIsEditing(false);
      setSelectedId(null);
    }

    alert('SUCCESS SUBMIT PRODUCT');
    dispatch(retreiveProduct());
  };

  const handleDelete = async (id) => {
    console.log(id);
    if (confirm('Apakah anda yakin ingin menghapus data ini?')) {
      if (id === selectedId) {
        setIsEditing(false);
        setSelectedId(null);
        formik.resetForm();
      }
      await dispatch(deleteProduct(id));
      dispatch(retreiveProduct());
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
    loading,

    // FUNCTION
    formik,
    handleSubmit,
    handleDelete,
    handleEdit,
  };
};

export default useCreateProductViewModel;
