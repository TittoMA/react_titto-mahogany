import { createSlice } from '@reduxjs/toolkit';
import { retreiveProduct, addProduct, updateProduct, deleteProduct } from './productThunk';

const initialState = {
  products: [],
  loading: {
    status: false,
    type: undefined,
  },
  retreiveProductError: undefined,
  addProductError: undefined,
  updateProductError: undefined,
  deleteProductError: undefined,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retreiveProduct.pending, (state) => {
        return {
          ...state,
          loading: {
            status: true,
            type: 'RETREIVE_PRODUCT',
          },
        };
      })
      .addCase(retreiveProduct.fulfilled, (state, action) => {
        return {
          ...state,
          products: action.payload,
          loading: {
            status: false,
            type: undefined,
          },
        };
      })
      .addCase(retreiveProduct.rejected, (state, action) => {
        return {
          ...state,
          retreiveProductError: action.payload,
          loading: {
            status: false,
            type: undefined,
          },
        };
      })
      .addCase(addProduct.pending, (state) => {
        return {
          ...state,
          loading: {
            status: true,
            type: 'ADD_PRODUCT',
          },
        };
      })
      .addCase(addProduct.fulfilled, (state) => {
        return {
          ...state,
          loading: {
            status: false,
            type: undefined,
          },
        };
      })
      .addCase(addProduct.rejected, (state, action) => {
        return {
          ...state,
          addProductError: action.payload,
          loading: {
            status: false,
            type: undefined,
          },
        };
      })
      .addCase(updateProduct.pending, (state) => {
        return {
          ...state,
          loading: {
            status: true,
            type: 'UPDATE_PRODUCT',
          },
        };
      })
      .addCase(updateProduct.fulfilled, (state) => {
        return {
          ...state,
          loading: {
            status: false,
            type: undefined,
          },
        };
      })
      .addCase(updateProduct.rejected, (state, action) => {
        return {
          ...state,
          addProductError: action.payload,
          loading: {
            status: false,
            type: undefined,
          },
        };
      })
      .addCase(deleteProduct.pending, (state) => {
        return {
          ...state,
          loading: {
            status: true,
            type: 'DELETE_PRODUCT',
          },
        };
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        return {
          ...state,
          loading: {
            status: false,
            type: undefined,
          },
        };
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        return {
          ...state,
          addProductError: action.payload,
          loading: {
            status: false,
            type: undefined,
          },
        };
      });
  },
});

export const { actions: productAction, reducer: productReducer } = productSlice;
