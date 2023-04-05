// ----Single Responsibility Principle-----
// În fișierul ProductItem.js, clasa ProductItem are o singură responsabilitate
//  - afișarea detaliilor produsului și gestionarea adăugării produsului în coșul de cumpărături.

import React from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import '../../styles/ProductItem.css';




const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card >
      <CardContent>
        <Typography variant="h5" component="h2">
          <div className='name-product'>{product.title}</div>
        </Typography>
        <Typography color="textSecondary">
          
    
        </Typography>
        <img className='photo-product' src={product.images}/>
        <div className='price-product'>Price: {product.price}$</div>
        <br></br>
        <div className='description'>{product.description}</div>
              </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
