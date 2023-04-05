// Dependency Inversion Principle
// În fișierul ProductList.js, clasa ProductList depinde de o interfață ProductService, în loc să depindă de implementarea specifică a serviciului. Acest lucru permite ca serviciul să fie nlocuit în mod transparent cu o altă implementare în viitor, fără a modifica clasa ProductList.

import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../ProductItem/ProductItem';
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
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
