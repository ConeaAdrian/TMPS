// CartItem.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/actions/cartActions';
import '../../styles/CartItem.css';



const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (item.product) {
      dispatch(updateQuantity(item.product.id, newQuantity));
    }
  };
  

  const handleRemoveClick = () => {
    if (item.product) {
      dispatch(removeFromCart(item.product.id));
    }
  };
  const handleBuyClick = () => {
    if (item.product) {
      dispatch(removeFromCart(item.product.id));
    }
  };

  return (
    <div className="cart-item">
      <div className="product-info">
        <div className="title">{item.product ? item.product.title : ''}</div>
        <div className="price">{item.product ? item.product.price : ''}</div>
      </div>
      <input type="number" value={item.quantity} onChange={handleQuantityChange} />
      <button className="remove-btn" onClick={handleRemoveClick}>Remove</button>
      <button className="buy-btn" onClick={handleBuyClick}>Buy</button>
    </div>
  );
  
};

export default CartItem;
