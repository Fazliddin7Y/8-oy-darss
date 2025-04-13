import React, { useState } from 'react';

type Product = {
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
};

type Props = {
  product: Product;
  onLikeToggle: (productName: string) => void;
  likedProducts: string[];
};

const ProductCard: React.FC<Props> = ({ product, onLikeToggle, likedProducts }) => {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  const isLiked = likedProducts.includes(product.name);

  return (
    <div className="w-full max-w-xs border rounded-lg p-4 shadow-lg transition-all hover:scale-105 transform bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-green-600 text-lg">
        ${product.price.toFixed(2)}{' '}
        {product.oldPrice && (
          <span className="line-through text-gray-400 text-sm">${product.oldPrice.toFixed(2)}</span>
        )}
      </p>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => onLikeToggle(product.name)}
          className={`px-4 py-2 rounded-md text-sm font-medium ${isLiked ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-700'} hover:bg-red-200`}
        >
          {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>

        <button
          onClick={toggleCart}
          className={`px-4 py-2 rounded-md text-sm font-medium ${inCart ? 'bg-yellow-200' : 'bg-gray-100'} hover:bg-yellow-300`}
        >
          {inCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
