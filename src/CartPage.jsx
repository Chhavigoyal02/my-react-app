import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import CartTotals from './CartTotals';
import { getProductData } from './api';

function CartPage({ cart, onUpdateCart, onDelete }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await Promise.all(
        Object.keys(cart).map(id => getProductData(id))
      );
      setProducts(productData);
    };

    fetchProducts();
  }, [cart]);

  return (
    <div className="bg-white min-h-screen p-4 max-w-5xl mx-auto flex flex-col gap-8 p-10">
      <Cart cart={cart} products={products} onUpdateCart={onUpdateCart} onDelete={onDelete} />
      <div className="flex flex-row-reverse">
        <CartTotals cart={cart} products={products} />
      </div>
    </div>
  );
}

export default CartPage;
