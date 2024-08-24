import React from 'react';
import {Link} from 'react-router-dom';
import { CiStar } from "react-icons/ci";

function Product({id,title,price,category,image,discount}){
  return (
    <div  className="max-w-xs border border-gray-200 p-2 relative">
      <div className="w-full aspect-square ">
        <img className="w-full h-full object-cover hover:shadow-2xl" src={image} alt={title}/>
        {(discount>10) && (<div className="absolute -top-2 -right-3 bg-primary-default rounded-full px-2 py-3 hover:text-xl">Sale!</div>)}
      </div>
        <div className="text-slate-400 text-xs mt-2 font-semibold">{category}</div>
      <h1 className="mt-1 text-sm font-bold text-slate-600">{title}</h1>
      <div className="flex mt-2">
        <CiStar className="text-primary-default"/>
        <CiStar className="text-primary-default"/>
        <CiStar className="text-primary-default"/>
        <CiStar className="text-primary-default"/>
        <CiStar className="text-primary-default"/>
      </div>
      <p className="text-sm font-semibold text-slate-600 mt-2 mb-3">${price}.00</p>
      <Link to={"products/"+id} className="text-base bg-primary-default text-white px-2 p-1 hover:text-lg hover:shadow-xl">View Detail</Link>
    </div>

  );
}

export default Product;