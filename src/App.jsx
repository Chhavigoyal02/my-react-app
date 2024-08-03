import React,{ useState,useCallback } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import ProductListPage from './ProductListPage.jsx';  
import {Routes,Route} from 'react-router-dom';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import CartPage from './CartPage.jsx';
import ForgotPasswordPage from './ForgotPasswordPage.jsx';

function App() {
  const savedDataString=localStorage.getItem("my-cart") || "{}";
  const savedData=JSON.parse(savedDataString);
  const [cart,setCart]=useState(savedData);
  const handleAddToCart = useCallback(function(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }, [cart]);

  const totalCount= Object.keys(cart).reduce(function(previous,current){
    return previous+cart[current];
  },0);

  
  return (
    <div className="bg-gray-200 h-screen overflow-y-auto flex flex-col">
      <Navbar productCount={totalCount}/>
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route path="/products/:id" element={<ProductDetail onAddToCart = {handleAddToCart} />}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          <Route path="/forgotpassword" element={<ForgotPasswordPage/>}></Route>
          <Route path="/CartPage" element={<CartPage/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
export default App;