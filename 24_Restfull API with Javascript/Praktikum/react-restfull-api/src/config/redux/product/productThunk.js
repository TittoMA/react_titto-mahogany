import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const retreiveProduct = createAsyncThunk('product/retreiveProduct', async () => {
  const res = await axios.get('https://6430e4493adb15965161ea34.mockapi.io/api/v1/products');
  return res.data;
});

export const addProduct = createAsyncThunk('product/addProduct', async (productData) => {
  const res = await axios.post('https://6430e4493adb15965161ea34.mockapi.io/api/v1/products', productData);
  return res.data;
});

export const updateProduct = createAsyncThunk('product/updateProduct', async ({ productId, productData }) => {
  const url = `https://6430e4493adb15965161ea34.mockapi.io/api/v1/products/${productId}`;
  const res = await axios.put(url, productData);
  return res.data;
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (productId) => {
  const url = `https://6430e4493adb15965161ea34.mockapi.io/api/v1/products/${productId}`;
  const res = await axios.delete(url);
  return res.data;
});
