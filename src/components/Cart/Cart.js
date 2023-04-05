import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartIrem/CartItem';
import '../../styles/CartItem.css';


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};


export default Cart;
