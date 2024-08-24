import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar({ productCount }) {
  return (
    <div className="flex justify-between bg-white mb-10 items-center py-4">
      <Link to="/"><img className="h-10 ml-4 sm:ml-48" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" /></Link>
      <div className="flex items-center mr-4 sm:mr-48 gap-4">
        <Link to="/login"><IoIosLogIn className="w-8 h-8" /></Link>
        <Link to="/CartPage" className="relative">
          <CiShoppingCart className="w-10 h-10" />
          {productCount > 0 && (
            <div className="text-white bg-primary-default hover:bg-white hover:text-primary-default hover:border hover:border-primary-default rounded-full px-2 absolute top-0 left-6">
              {productCount}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
