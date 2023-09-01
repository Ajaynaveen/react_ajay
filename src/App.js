

import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Rating: {item.rating}</p>
      <button
        className="remove-button"
        onClick={() => removeFromCart(item)}
      >
        Remove from Cart
      </button>
    </div>
  );
}

function Product({ item, addToCart }) {
  return (
    <div className="product">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Rating: {item.rating}</p>
      <button className="add-button" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
}

function App() {
  const items = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15,
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 25,
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 35,
      rating: 4.2,
    },
  
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <h1>Items here</h1>
      <div className="products-container">
        {items.map((item) => (
          <Product key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <h2>Cart items</h2>
      <div className="cart-container">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
