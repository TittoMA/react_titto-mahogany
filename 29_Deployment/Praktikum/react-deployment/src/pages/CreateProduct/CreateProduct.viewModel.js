import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_PRODUCT_BY_ID } from '../../graphql/query';
import { INSERT_PRODUCT, UPDATE_PRODUCT } from '../../graphql/mutation';

const useCreateProductViewModel = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [language] = useState('en');
  const [getDetailProduct, { loading: loadingGetDetail, data: dataDetail }] = useLazyQuery(GET_PRODUCT_BY_ID);
  const [insertProduct, { loading: loadingInsert }] = useMutation(INSERT_PRODUCT);
  const [updateProduct, { loading: loadingUpdate }] = useMutation(UPDATE_PRODUCT);

  useEffect(() => {
    if (productId) {
      getDetailProduct({ variables: { id: productId } });
    }
  }, []);

  useEffect(() => {
    if (productId) {
      if (dataDetail) {
        if (dataDetail.product_by_pk !== null) {
          handleEdit(productId);
        } else {
          navigate('/product-list');
        }
      }
    }
  }, [dataDetail]);

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
    const dataSubmit = {
      product_name: data.productName,
      product_category: data.productCategory,
      product_freshness: data.productFreshness,
      product_price: data.productPrice,
      image: data.image,
      additional_description: data.additionalDescription,
    };

    if (!isEditing) {
      insertProduct({
        variables: {
          object: dataSubmit,
        },
        onCompleted: (data) => {
          alert('SUCCESS SUBMIT PRODUCT');
        },
      });
    } else {
      updateProduct({
        variables: {
          id: selectedId,
          object: dataSubmit,
        },
        onCompleted: (data) => {
          alert('SUCCESS UPDATE PRODUCT');
          navigate('/product-list');
        },
      });
    }
  };

  const handleEdit = (id) => {
    console.log('EDIT', id);
    setSelectedId(id);
    setIsEditing(true);
    formik.setFieldValue('productName', dataDetail.product_by_pk.product_name);
    formik.setFieldValue('productCategory', dataDetail.product_by_pk.product_category);
    formik.setFieldValue('productImage', undefined);
    formik.setFieldValue('productFreshness', dataDetail.product_by_pk.product_freshness);
    formik.setFieldValue('productDescription', dataDetail.product_by_pk.additional_description);
    formik.setFieldValue('productPrice', dataDetail.product_by_pk.product_price);
  };

  return {
    // DATA
    isEditing,
    language,
    loadingGetDetail,
    loadingInsert,
    loadingUpdate,

    // FUNCTION
    formik,
    handleSubmit,
    handleEdit,
  };
};

export default useCreateProductViewModel;
