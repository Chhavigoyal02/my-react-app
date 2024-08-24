import React, { useState } from 'react';
import CartItem from './CartItem';

function Cart({ cart, products, onUpdateCart }) {
  const [localCart, setLocalCart] = useState(cart);

  const handleQuantityChange = (productId, delta) => {
    const updatedQuantity = localCart[productId] + delta;
    if (updatedQuantity > 0) {
      setLocalCart({ ...localCart, [productId]: updatedQuantity });
    } else {
      handleDelete(productId); // If quantity is 0, remove the product
    }
  };

  const handleDelete = (productId) => {
    const { [productId]: _, ...rest } = localCart; // Remove the product from the localCart
    setLocalCart(rest); // Update the state to trigger re-render
  };

  const handleUpdateCart = () => {
    onUpdateCart(localCart);
  };

  return (
    <div className="container mx-auto bg-white shadow-lg border border-gray-400">
      <table className="min-w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-gray-100 text-center bg-gray-200">
            <th className="w-1/4 p-4">Product</th>
            <th className="w-1/4 p-4">Name</th>
            <th className="w-1/6 p-4">Price</th>
            <th className="w-1/6 p-4">Quantity</th>
            <th className="w-1/6 p-4">Subtotal</th>
            <th className="w-1/12 p-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            localCart[product.id] && ( 
              <CartItem
                key={product.id}
                productId={product.id}
                product={product.title}
                price={product.price}
                quantity={localCart[product.id]}
                imageUrl={product.image}
                onQuantityChange={handleQuantityChange}
                onDelete={() => handleDelete(product.id)} 
              />
            )
          ))}
        </tbody>
      </table>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex mt-4 gap-2 p-6">
          <input
            type="text"
            placeholder="Coupon code"
            className="p-2 border border-gray-400"
          />
          <button className="bg-primary-default p-2 px-6 text-white rounded hover:bg-primary-dark">
            APPLY COUPON
          </button>
        </div>
        <div className="mr-6 mt-4 p-6">
          <button
            className=" p-2 px-6 text-gray-400 rounded bg-primary-default font-semi-bold"
            onClick={handleUpdateCart}
          >
            UPDATE CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
