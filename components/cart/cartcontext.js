"use client"

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
