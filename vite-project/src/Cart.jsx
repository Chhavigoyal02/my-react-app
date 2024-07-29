import React from 'react';
import CartItem from './CartItem';

function Cart() {
  const cartItems = [
    {
      product: 'Black Printed Coffee Mug',
      price: 15.0,
      quantity: 2,
      imageUrl: 'https://media.gettyimages.com/id/171368204/photo/red-cup.jpg?s=612x612&w=gi&k=20&c=9AbmjBikYtUanBiW3V86AHqqrrWZ8hSIlM9wG4qR3qo=',
    },
    {
      product: 'Printed Dark Blue Tshirt',
      price: 34.0,
      quantity: 4,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886013_640.png',
    },
  ];

  return (
    <div className="container mx-auto  bg-white shadow-lg border border-gray-400">
      <table className="min-w-full table-fixed border-collapse ">
        <thead >
          <tr className="bg-gray-100 text-center bg-gray-200">
            <th className="w-1/4 p-4">Product</th>
            <th className="w-1/4 p-4">Name</th>
            <th className="w-1/6 p-4">Price</th>
            <th className="w-1/6 p-4">Quantity</th>
            <th className="w-1/6 p-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              product={item.product}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
            />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex mt-4 gap-2 p-6">
          <input
            type="text"
            placeholder="Coupon code"
            className="p-2 border border-gray-300 "
          />
          <button className="bg-primary-default p-2 px-6 text-white rounded hover:bg-primary-dark">
            APPLY COUPON
          </button>
        </div>
        <div className="mr-6 mt-4 p-6">
          <button className="bg-primary-light p-2 px-6 text-gray-400 rounded hover:bg-primary-default font-semi-bold ">
            UPDATE CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
