import React, { useState } from 'react';
import productsData from '../product.json';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const item = productsData.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const incQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };


  return (
    <div className="product-details">
      <div className="product-card">
        <img src={`/image/${item.image}`} />
        <div className="product-info mx-5">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={incQuantity}
          />
          <button className='btn bg-primary text-light'>Add to Cart</button>
        </div>
      </div>
    
    </div>
  );
};

export default ProductDetail;
