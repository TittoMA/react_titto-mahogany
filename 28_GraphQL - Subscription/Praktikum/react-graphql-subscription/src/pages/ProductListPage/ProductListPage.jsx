import React from 'react';
import Header from '../../components/Header';
import ListProduct from '../../components/ListProduct';
import useProductListPageViewModel from './ProductListPage.viewModel';
const ProductListPage = () => {
  const viewModel = useProductListPageViewModel();

  return (
    <>
      <Header />
      <main>
        <div className='container py-5'>
          <div className='d-flex gap-2 align-items-center mb-4'>
            <input
              className='form-control'
              placeholder='Search...'
              value={viewModel.searchText}
              onChange={viewModel.onChangeSearch}
            />
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <h1>ALL PRODUCTS</h1>
            <a href='/create-product' className='btn btn-success'>
              Add Product
            </a>
          </div>
          {viewModel.loading ? (
            <h1>LOADING...</h1>
          ) : (
            <ListProduct
              data={
                !viewModel.isSearching
                  ? viewModel.data.product
                  : viewModel.data.product.filter((item) =>
                      item.product_name.toLowerCase().includes(viewModel.searchText.toLowerCase())
                    )
              }
            />
          )}
        </div>
      </main>
    </>
  );
};

export default ProductListPage;
