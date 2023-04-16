import { gql } from '@apollo/client';

export const PRODUCTS_SUBSCRIPTION = gql`
  subscription MySubscription {
    product {
      additional_description
      product_price
      product_name
      product_freshness
      product_category
      image
      id
    }
  }
`;
