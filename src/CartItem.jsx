import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

function CartItem({ productId, product, price, quantity, imageUrl, onQuantityChange, onDelete }) {
  const subtotal = price * quantity;

  const handleQuantityChange = (delta) => {
    onQuantityChange(productId, delta);
  };

  return (
    <tr className="border-b border-gray-400 text-center">
      <td className="py-4 px-2">
        <img src={imageUrl} alt={product} className="w-16 h-16 object-cover m-auto" />
      </td>
      <td className="text-primary-default font-bold">
          {product}
      </td>
      <td>${price.toFixed(2)}</td>
      <td>
        <div className="flex items-center justify-center">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="px-2 border border-gray-400"
            disabled={quantity <= 1}
          >-</button>
          <input
            type="number"
            value={quantity}
            className="w-12 text-center border border-gray-400 mx-2"
            readOnly
          />
          <button
            onClick={() => handleQuantityChange(1)}
            className="px-2 border border-gray-400"
          >+</button>
        </div>
      </td>
      <td>${subtotal.toFixed(2)}</td>
      <td>
        <button onClick={onDelete} className="text-red-500">
          <MdClose size={20} />
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
