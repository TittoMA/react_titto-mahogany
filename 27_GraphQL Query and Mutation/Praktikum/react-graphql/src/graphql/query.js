import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProductsLimit {
    product {
      id
      additional_description
      product_name
      product_price
    }
  }
`;

export const GET_PRODUCTS_LIMIT = gql`
  query GetProductsLimit($limit: Int!) {
    product(limit: $limit) {
      id
      additional_description
      product_name
      product_price
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: Int!) {
    product_by_pk(id: $id) {
      product_price
      product_name
      product_freshness
      product_category
      image
      id
      additional_description
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($id: Int!) {
    comments(where: { product_id: { _eq: $id } }) {
      comment
      id
      name
      product_id
    }
  }
`;
