import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import ProductListPage from './ProductListPage.jsx';  
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import CartPage from './CartPage.jsx';
import ForgotPasswordPage from './ForgotPasswordPage.jsx';
import { getProductData } from './api';
import Loading from './Loading';

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch all product data once when the app loads
    const fetchAllProducts = async () => {
      setLoading(true);
      const allProductIds = Object.keys(cart);
      const productData = await Promise.all(allProductIds.map(id => getProductData(id)));
      setProducts(productData);
      setLoading(false);
    };

    fetchAllProducts();
  }, [cart]);

  const handleAddToCart = useCallback((productId, count) => {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }, [cart]);

  const handleUpdateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("my-cart", JSON.stringify(updatedCart));
  };

  const handleDeleteFromCart = (productId) => {
    const { [productId]: _, ...restCart } = cart;
    setCart(restCart);
    localStorage.setItem("my-cart", JSON.stringify(restCart));
  };

  const totalCount = Object.keys(cart).reduce((previous, current) => previous + cart[current], 0);

  return (
    <div className="bg-gray-200 h-screen overflow-y-auto flex flex-col">
      <Navbar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route 
            path="/products/:id" 
            element={<ProductDetail products={products} onAddToCart={handleAddToCart} loading={loading} />} 
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route 
            path="/CartPage" 
            element={<CartPage cart={cart} products={products} onUpdateCart={handleUpdateCart} onDelete={handleDeleteFromCart} loading={loading} />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
