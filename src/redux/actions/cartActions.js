// cartActions.js

// Principiul Open/Closed (OCP) este implementat în fișierul 
// cartActions.js, unde adăugarea unor noi acțiuni în coșul de 
// cumpărături se poate face prin extinderea clasei 
// CartActionTypes și definirea de noi constante care să reprezinte
//  noile acțiuni. Astfel, codul existent rămâne neschimbat și nu 
//  trebuie să fie modificat pentru a adăuga noi acțiuni în 
//  coșul de cumpărături:

//Principiul I -- Interface Segregation Principle Componenta 
// Acțiunile Redux din fișierul cartActions.js sunt separate în 
// funcții mici și precise (addToCart, removeFromCart, updateQuantity, 
//   addToPurchasedItems), fiecare având o singură responsabilitate.
//    Acest lucru permite ca componentele să utilizeze doar funcțiile 
//    necesare pentru a-și îndeplini sarcinile, 
// fără a fi încărcate cu funcționalități suplimentare nerelevante.

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const updateQuantity = (productId, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: {
    productId,
    quantity,
  },
});
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId
  };
};

export const addToPurchasedItems = (product) => ({
  type: 'ADD_TO_PURCHASED_ITEMS',
  payload: product,
});




