import React from 'react';

function ProductTable() {
  return (
    <table
      id='product-table'
      className='table table-striped'
      style={{ marginBottom: 200 }}
    >
      <tbody>
        <tr>
          <th>No.</th>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Image of Product</th>
          <th>Product Freshness</th>
          <th>Additional Description</th>
          <th>Product Price</th>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductTable;
