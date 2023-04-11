// ----Single Responsibility Principle-----
// În fișierul ProductItem.js, clasa ProductItem are o singură responsabilitate
//  - afișarea detaliilor produsului și gestionarea adăugării produsului în coșul de cumpărături.
import React from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import '../../styles/ProductItem.css';

function limitWords(text, limit) {
  const words = text.split(/\s+/);
  return words.slice(0, limit).join(' ');
}

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          <div className='name-product'>{limitWords(product.title, 5)}...</div>
        </Typography>
        <Typography color="textSecondary"></Typography>
        <img className='photo-product' src={product.image} />
        <div className='price-product'>Price: {product.price}$</div>
        <br></br>
        <div className='description'>{limitWords(product.description, 20)}..</div>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
