import { gql } from '@apollo/client';

export const INSERT_PRODUCT = gql`
  mutation InsertProduct($object: product_insert_input!) {
    insert_product_one(object: $object) {
      id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($object: product_set_input!, $id: Int!) {
    update_product_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Int!) {
    delete_product_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT_COMMENT = gql`
  mutation insertComment($object: comments_insert_input!) {
    insert_comments_one(object: $object) {
      id
    }
  }
`;
