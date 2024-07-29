import React from 'react';

function CartItem({ product, price, quantity, imageUrl }) {
  const subtotal = price * quantity;

  return (
    <tr className="border-b border-gray-400  text-center">
      <td className="py-4 px-2">
        <img src={imageUrl} alt={product} className="w-16 h-16 object-cover m-auto" />
      </td>
      <td className="text-primary-default font-bold">{product}</td>
      <td>${price.toFixed(2)}</td>
      <td>
        <input
          type="number"
          value={quantity}
          className="w-12 text-center border border-gray-400 "
          readOnly
        />
      </td>
      <td>${subtotal.toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
