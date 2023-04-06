import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, addToPurchasedItems } from '../../redux/actions/cartActions';
import apiService from '../../services/ApiService';
import '../../styles/CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState('');

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (item) {
      dispatch(updateQuantity(item.id, newQuantity));
    }
  };

  const handleRemoveClick = () => {
    if (item) {
      dispatch(removeFromCart(item.id));

    }
  };

  const handleBuyClick = () => {
    if (item) {
      setBgColor('lightgreen');
      dispatch(addToPurchasedItems(item));
 
    }
  };

  return (
    <div className="cart-item" style={{ backgroundColor: bgColor }}>
      <div className="product-info">
        <div className="title">{item ? item.title : ''}</div>
        <div className="price">Price: {item ? item.price : ''} $</div>
      </div>
      <input type="number" value={item.quantity} onChange={handleQuantityChange} />
      <button className="remove-btn" onClick={handleRemoveClick}>Remove</button>
      <button className="buy-btn" onClick={handleBuyClick}>Buy</button>
    </div>
  );
};

export default CartItem;
