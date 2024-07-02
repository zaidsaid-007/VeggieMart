import React from 'react';


const HomePage = () => {
  const handleProductClick = (productId) => {
    // Navigate to the product details. Not done that. For now
    console.log(`Product ${productId} clicked`);
  };

  return (
    <div className="home-page">
      <h1>Products</h1>
      <ul className="product-list">
        <li className="product-item" onClick={() => handleProductClick(1)}>
          Product 1
        </li>
        <li className="product-item" onClick={() => handleProductClick(2)}>
          Product 2
        </li>
        <li className="product-item" onClick={() => handleProductClick(3)}>
          Product 3
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
