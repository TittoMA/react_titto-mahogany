import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    product {
      id
      additional_description
      product_name
      product_price
    }
  }
`;

const useProductListPageViewModel = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === '') {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  };

  return { loading, error, data, isSearching, searchText, onChangeSearch };
};

export default useProductListPageViewModel;
