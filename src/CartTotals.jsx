import React from 'react';

function CartTotals({ cart, products }) {
  const subtotal = products.reduce((sum, product) => {
    return sum + product.price * cart[product.id];
  }, 0);

  return (
    <div className="w-full sm:w-5/12 bg-white shadow-lg mt-6 lg:mt-0 border border-gray-400">
      <h2 className="text-lg font-bold mb-4 bg-gray-200 p-4 border-b border-gray-400">Cart totals</h2>
      <div className="flex justify-between mb-2 px-6 border-b py-2 border-gray-400">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4 px-6 border-b py-2 border-gray-400">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="px-6">
        <button className="w-full bg-primary-default text-white py-2 rounded mb-6 hover:bg-primary-dark">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartTotals;
