import React from 'react';
import ProductCard from './ProductCard';

const sampleProduct = {
  name: 'Wireless Headphones',
  image: '/product.jpg',
  price: 129.99,
  variants: ['Black', 'White', 'Blue'],
  stock: 0, // Change to 0 to test "Out of Stock"
};

function App() {
  return (
    <div
      style={{
        padding: '30px',
        backgroundColor: '#f2f2f2',
        minHeight: '100vh',
      }}
    >
      <ProductCard product={sampleProduct} />
    </div>
  );
}

export default App;
