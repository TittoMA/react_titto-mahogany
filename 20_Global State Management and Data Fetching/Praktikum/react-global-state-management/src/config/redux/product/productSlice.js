import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 'e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836',
      productName: 'John',
      productCategory: 'Doe',
      productFreshness: 'Doe',
      productPrice: 'Doe',
      image: 'Doe',
      additionalDescription: 'Doe',
    },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add: (state, action) => {
      state.products.push(action.payload);
    },
    edit: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    delete: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export const { actions: productAction, reducer: productReducer } = productSlice;
