import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../ProductItem/ProductItem';
import CartItem from '../CartIrem/CartItem';
import ApiService from '../../services/ApiService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await ApiService.getProducts();
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    
    <Grid container spacing={2}>
      
      {products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          {/* <CartItem item={{ product, quantity: 1 }} /> */}
          <ProductItem product={product} />
          
          
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
