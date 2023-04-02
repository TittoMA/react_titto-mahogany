import { useSelector } from 'react-redux';

export const useProductListSelector = () => {
  return useSelector((state) => state.product.products);
};
