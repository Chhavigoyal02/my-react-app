import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";
import {Link} from 'react-router-dom';

function Navbar({productCount}){
  return(
    <div className="flex justify-between bg-white mb-10 items-center py-4" >
      <Link to="/"><img className="h-10 ml-4 sm:ml-48" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/></Link>
     <div className="flex items-center gap-10">
       <Link to="/login/"><div className="flex"><p className="text-primary-default text-lg hover:text-xl">LogIn</p><IoIosLogIn className="text-primary-default text-lg hover:text-xl mt-2"/></div></Link>
       <div className="relative   ">
       <Link to="/CartPage/"><CiShoppingCart className="mr-4 sm:mr-48 text-5xl" />
         <span className="text-white bg-primary-default hover:bg-white hover:text-primary-default hover:border hover:border-primary-default rounded-full px-2 absolute top-1 left-7">{productCount}</span></Link>
         </div>
     </div>
    </div>
  );
}

export default Navbar;




