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
              <td>{value.name}</td>
              <td>{value.category}</td>
              <td>{value.image}</td>
              <td>{value.freshness}</td>
              <td>{value.price}</td>
              <td>
                <button onClick={() => onDelete(index)} className='btn btn-danger me-2'>
                  Delete
                </button>
                <button onClick={() => onEdit(index)} className='btn btn-success'>
                  Edit
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
