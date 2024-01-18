import React, { useState } from "react";

import Cart from "./components/cart";
import Product from "./components/product";


function App() {
  const [cartItems, setCartItems] = useState([]);


  const addProductToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

const removeFromCart = (id)=>{
let updated = cartItems.filter((Products)=>{
  return Products.id !== id
})

setCartItems(updated)
}
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <Product name="iPhone 13" AddToCart={addProductToCart} />
      <Cart items={cartItems} removeFromCart={removeFromCart}/>
    </div>
  );
}


export default App;