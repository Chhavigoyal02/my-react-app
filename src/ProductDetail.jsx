import React, {useState,useEffect,useCallback} from 'react';
import {useParams,Link} from 'react-router-dom';
import {getProductData} from './api.js';
import Loading from './Loading.jsx';
import { GrPrevious, GrNext } from "react-icons/gr";
import NotFound from './NotFound.jsx';
import HomePageArrow from './HomePageArrow.jsx';

function ProductDetail({onAddToCart}){
  const id=+(useParams().id);
  const [product,setProduct]=useState();
  const [loading,setLoading]=useState(true);
  const [count,setCount]=useState(1);
  
  useEffect(function(){
    const p=getProductData(id);
    p.then(function(product){
      setProduct(product);
      setLoading(false);
    });
    p.catch(function(){
      setLoading(false);
    });
  },[id]);

  useEffect(function() {
    setCount(1);
  }, [id]);

  const handleButtonClick = useCallback(function() {
    onAddToCart(id, count);
    setCount(1);
  }, [id, count, onAddToCart]);

  const handleCountChange = useCallback(function(event){
    setCount(+event.target.value);
  }, []);
  
  function handleIncrement() {
    setCount(prevCount => prevCount + 1);
  }

  function handleDecrement() {
    setCount(prevCount => Math.max(1, prevCount - 1));
  }

  if(loading){
    return <Loading/>
  }
  if(!product){
    return <NotFound/>
  }
  return (
    <>
       <HomePageArrow/>
    <div className="bg-gray-200 px-4 sm:px-24  ">
      <div className="h-full bg-white flex flex-col sm:flex-row px-4 sm:px-8 py-8 gap-3  h-full relative">
          <img className="w-full sm:w-6/12 object-cover" src={product.thumbnail}  alt={product.category}/>
          <div className="px-4 sm:px-8 flex flex-col ">
              <h1 className="text-3xl text-gray-800">{product.title}</h1>
            {(product.discountPercentage>10) ? 
            (<div className="flex gap-2 items-center">
              <h2 className="mt-4 text-xl text-primary-light line-through decoration-black">${((product.price*100)/(100-product.discountPercentage)).toFixed(2)}</h2>
              <h2 className=" mt-4 text-xl text-primary-dark">${product.price} </h2>
              <h2 className="flex flex-col items-center bg-primary-default text-white rounded-full px-2 py-3 absolute -top-5 -left-4 animate-pulse">{product.discountPercentage}%<span> OFF</span></h2>
            </div>):
            (<h2 className=" mt-4 text-xl text-primary-dark">${product.price}</h2>)}
              <p className="mt-4 text-base">{product.description}</p>
            <div className="mt-4 flex items-center py-4 border-b-4">
              <button onClick={handleDecrement} className="mr-1 px-3 text-xl bg-gray-400 rounded-full hover:bg-primary-default">-</button>
              <input className="border-2 border-gray-400 w-10 text-center px-1 bg-gray-200" value={count} onChange={handleCountChange} type="text" />
              <button onClick={handleIncrement} className="ml-1 px-2  text-xl bg-gray-400 rounded-full hover:bg-primary-default">+</button>
              <button className="ml-4 bg-primary-default hover:bg-primary-dark text-white px-8 py-1 rounded-lg" onClick={handleButtonClick}>ADD TO CART</button>
            </div>
            <p className="mt-4 text-base">Category: <span className="text-primary-default">{product.category}</span></p>
          </div>
      </div>   
    </div>
    
    <div className="flex justify-between mt-4">
      <div className="ml-4 sm:ml-28 mb-8">{id>1 && (<Link to={"/Product/"+(id-1)} ><GrPrevious className="text-3xl "/>Previous</Link>)}</div>
      <div className="mr-4 sm:mr-28 mb-8"><Link to={"/Product/"+(id+1)} ><GrNext className="text-3xl"/>Next</Link></div>
    </div>
    </>
  );
}

export default ProductDetail;