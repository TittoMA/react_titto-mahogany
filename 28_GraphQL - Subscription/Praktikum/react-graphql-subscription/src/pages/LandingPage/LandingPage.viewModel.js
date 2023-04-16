import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_LIMIT } from '../../graphql/Query';

const useLandingPageViewModel = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_LIMIT, { variables: { limit: 3 } });

  return { loading, error, data };
};

export default useLandingPageViewModel;
