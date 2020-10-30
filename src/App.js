import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from './Component/Navbar'
import SearchSection from './Component/SearchSection'
import styles from './styles.module.scss'
import topCategories from './topCategories'

function App() {
  return (
  <>
    <div className={styles.header}>
      <Container>  
        <Row>
          <Col>
            <NavbarCustom />
          </Col>
        </Row>
      </Container>
    </div>
    <SearchSection title="DeltaSets" searchBtnText="Filter" topCategoriesData={topCategories} />
  <div className={styles.carouselSection}>
     <Container>
       <Row>
         <Col>
       <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
       </Row>
     </Container>
  </div>
  </>
  );
}

export default App;
