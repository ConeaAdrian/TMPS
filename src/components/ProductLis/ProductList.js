// principiu SOLID este L - Principiul închis deschis (The Open-Closed Principle).

// Un exemplu de implementare a principiului închis deschis 
// în cod poate fi văzut în fișierul ProductList.js. 
// Clasa ProductList este deschisă pentru extindere prin adăugarea 
// de noi funcționalități la interfața ProductService, dar închisă 
// pentru modificare deoarece nu modifică codul clasei ProductList.
//  Astfel, putem schimba implementarea specifică a serviciului de 
//  produse prin crearea unei alte clase care implementează interfața 
//  ProductService și 
// fără a schimba codul clasei ProductList.

// Dependency Inversion Principle

// În fișierul ProductList.js, clasa ProductList depinde de o interfață ProductService, în loc să depindă de implementarea specifică a serviciului. Acest lucru permite ca serviciul să fie înlocuit în mod transparent cu o altă implementare în viitor, fără a modifica clasa ProductList, respectând astfel principiul DIP.
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../ProductItem/ProductItem';
import CartItem from '../CartIrem/CartItem';
import ApiService from '../../services/ApiService';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    try {
      const productList = await ApiService.getProducts();
      this.setState({ products: productList });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  render() {
    const { products } = this.state;

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
  }
}

export default ProductList;
