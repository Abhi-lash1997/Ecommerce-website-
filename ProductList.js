import React from 'react';
import productsData from '../product.json';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();

  const Itemdetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h2 className='title'>Product List</h2>
      <div className="product-list d-flex">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`/image/${product.image}`} alt={product.name} />
            <div className="product-info text-center">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => Itemdetails(product.id)} >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
