import React from 'react';
import Cart from './Cart';
import CartTotals from './CartTotals';

function CartPage(){
  return (
    <div className="bg-gray-200 min-h-screen p-4 max-w-6xl mx-auto flex flex-col gap-8">
          <Cart />
      <div className="flex flex-row-reverse">          
        <CartTotals />
      </div>
    </div>
  );
};

export default CartPage;
