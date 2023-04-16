import React, { useState } from 'react';
import { useSubscription } from '@apollo/client';
import { PRODUCTS_SUBSCRIPTION } from '../../graphql/subscription';

const useProductListPageViewModel = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  // const { loading, error, data } = useQuery(GET_PRODUCTS);
  const { data, loading } = useSubscription(PRODUCTS_SUBSCRIPTION);

  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === '') {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  };

  return { loading, data, isSearching, searchText, onChangeSearch };
};

export default useProductListPageViewModel;
