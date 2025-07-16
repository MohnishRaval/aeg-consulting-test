import React, { useState } from 'react';
import './ProductCard.css'; // Import the CSS file
import blackImg from './assets/product-black.jpg';
import whiteImg from './assets/product-white.jpg';
import blueImg from './assets/product-blue.jpg';

export default function ProductCard({ product }) {
  const isOutOfStock = product.stock === 0;

  // Map each variant to its image path
  const variantImages = {
    Black: blackImg,
    White: whiteImg,
    Blue: blueImg,
  };

  // Default to first variant
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  // Use the image for the selected variant, fallback to product.image
  const imageSrc = variantImages[selectedVariant] || product.image;

  return (
    <div className='card'>
      <img src={imageSrc} alt={product.name} className='card-image' />
      <h2 className='card-title'>{product.name}</h2>
      <p className='card-price'>${product.price.toFixed(2)}</p>

      <select
        disabled={isOutOfStock}
        className='card-select'
        value={selectedVariant}
        onChange={(e) => setSelectedVariant(e.target.value)}
      >
        {product.variants.map((variant, idx) => (
          <option key={idx} value={variant}>
            {variant}
          </option>
        ))}
      </select>

      <button
        disabled={isOutOfStock}
        className={`card-button ${isOutOfStock ? 'disabled' : ''}`}
      >
        {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
}
