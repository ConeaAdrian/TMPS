import { FETCH_PRODUCTS } from './types';
import ApiService from '../../services/ApiService';

export const fetchProducts = () => async dispatch => {
  try {
    const products = await ApiService.getProducts();
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
