import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductListSelector } from '../../config/redux/product/productSelector';

const useDetailProductviewModel = () => {
  const { productId } = useParams();
  const productList = useProductListSelector();
  const product = productList[productId - 1];
  return { product };
};

export default useDetailProductviewModel;
