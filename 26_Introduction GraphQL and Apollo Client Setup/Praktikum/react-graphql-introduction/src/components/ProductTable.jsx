import React from 'react';
import { Link } from 'react-router-dom';

function ProductTable({ data, onDelete, onEdit }) {
  return (
    <table id='product-table' className='table table-striped' style={{ marginBottom: 200 }}>
      <tbody>
        <tr>
          <th>No.</th>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Image</th>
          <th>Product Freshness</th>
          <th>Product Price</th>
          <th>Action</th>
        </tr>

        {data &&
          data.map((value, index) => (
            <tr key={index}>
              <td>
                <Link to={`/product/${index + 1}`}>{index + 1}</Link>
              </td>
              <td>{value.productName}</td>
              <td>{value.productCategory}</td>
              <td>{value.image}</td>
              <td>{value.productFreshness}</td>
              <td>{value.productPrice}</td>
              <td>
                <div className='d-flex'>
                  <button onClick={() => onDelete(value.id)} className='btn btn-danger me-2'>
                    Delete
                  </button>
                  <button onClick={() => onEdit(value.id)} className='btn btn-success'>
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
