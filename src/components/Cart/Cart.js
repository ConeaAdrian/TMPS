// Principiul Liskov Substitution (LSP) este folosit în mod
//  implicit în toate componentele React, prin faptul că
//   orice componentă poate fi înlocuită cu alta componentă 
//   fără a afecta comportamentul aplicației. În plus, acest
//    principiu poate fi văzut în fișierul Cart.js, unde componenta 
//    Cart primește ca și proprietate un obiect item care poate 
//    fi de orice tip, atâta timp cât acesta are o proprietate 
//    quantity și o proprietate product. Acest lucru permite 
//    adăugarea de noi tipuri de obiecte în coșul de cumpărături 
//    fără a fi nevoie să modificăm componenta Cart:


// Interface Segregation Principle, desi nu cpoate detine acest principiu,
//este posibil de realizat prin segregare, ISP este aplicat în mod implicit prin separarea responsabilităților în componente și funcții diferite:

// Componenta Cart este responsabilă doar pentru afișarea produselor 
// din coșul de cumpărături și nu implementează alte funcționalități 
// nerelevante pentru acest scop. Ea folosește componenta
//  CartItem pentru a afișa fiecare produs în parte.

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
