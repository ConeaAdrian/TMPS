// cartActions.js
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




