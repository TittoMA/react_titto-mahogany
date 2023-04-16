import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCT_BY_ID, GET_COMMENTS } from '../../graphql/query';
import { DELETE_PRODUCT, INSERT_COMMENT } from '../../graphql/mutation';

const useDetailProductviewModel = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [inputComment, setInputComment] = useState('');
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: productId,
    },
  });
  const {
    loading: loadingComments,
    error: errorComments,
    data: dataComments,
  } = useQuery(GET_COMMENTS, {
    variables: {
      id: productId,
    },
  });
  const [deleteProduct, { loading: loadingDelete }] = useMutation(DELETE_PRODUCT);
  const [insertComment, { loading: loadingInsertComment }] = useMutation(INSERT_COMMENT, {
    refetchQueries: [
      {
        query: GET_COMMENTS,
        variables: {
          id: productId,
        },
      },
    ],
  });

  const handleDelete = async () => {
    if (confirm('Apakah anda yakin ingin menghapus data ini?')) {
      await deleteProduct({ variables: { id: data.product_by_pk.id } });
      alert('success delete!');
      navigate('/product-list');
    }
  };

  const onChangeComment = (e) => {
    setInputComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    if (inputComment === '') {
      alert('Please input comment');
    } else {
      await insertComment({
        variables: {
          object: {
            name: 'Anonymous',
            comment: inputComment,
            product_id: data.product_by_pk.id,
          },
        },
      });
      setInputComment('');
      alert('success comment!');
    }
  };

  return {
    loading,
    loadingDelete,
    loadingComments,
    loadingInsertComment,
    error,
    errorComments,
    data,
    dataComments,
    inputComment,

    onChangeComment,
    handleSubmitComment,
    handleDelete,
  };
};

export default useDetailProductviewModel;
