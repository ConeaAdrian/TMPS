import React from 'react';
import Cart from '../../components/Cart/Cart';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductLis/ProductList';

const App = () => {
  return (
    <div>
      <Header />
      <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/08/laptops-regreso-a-clases-2022.jpg?resize=1280%2C720&quality=80&ssl=1"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Telefoane mobile de ultimă generație</h3>
              <p>Descoperă cele mai noi și performante smartphone-uri.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://pyxis.nymag.com/v1/imgs/956/5db/38bc1d91ee2321c6868bd5300d3b7959a2-best-college-laptops.2x.rhorizontal.w700.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Laptopuri pentru gaming și productivitate</h3>
              <p>
                Performanță și design îmbinat în cele mai bune laptopuri de pe
                piață.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/QzxeafN.gif"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Gadget-uri și accesorii inovatoare</h3>
              <p>
                Îmbunătățește-ți experiența digitală cu cele mai noi gadget-uri
                și accesorii.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="text-center mb-4">
          <Col>
            <h2>Telefoane mobile</h2>
            <p>
              Găsește cele mai recente smartphone-uri și bucură-te de
              performanță și design de top.
            </p>
          </Col>
          <Col>
            <h2>Laptopuri</h2>
            <p>
              Descoperă laptopurile perfecte pentru gaming, design grafic sau
              pur și simplu pentru a te bucura de un film.
            </p>
          </Col>
          <Col>
            <h2>Gadget-uri</h2>
            <p>
              Explorează cele mai noi gadget-uri și accesorii pentru a-ți
              îmbunătăți experiența digitală.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button variant="outline-primary" href="#produse">
              Vezi produsele
            </Button>
          </Col>
        </Row>
      <Container>
        
      <Cart />
        <ProductList />
      </Container>
    </div>
  );
};

export default App;
