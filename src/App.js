import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Button, ListGroup, Carousel} from 'react-bootstrap';
import NavbarCustom from './Component/Navbar'
import Heading from './Component/Heading'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.scss'

const newsJson = [{
  id: 1,
  name: 'Business News'
},
{
  id: 2,
  name: 'Technology News'
},
{
  id: 3,
  name: 'Health News'
},
{
  id: 5,
  name: 'Entertainment'
},
{
  id: 6,
  name: 'Stocks'
},
{
  id: 7,
  name: 'Weather'
},
{
  id: 8,
  name: 'Tweets'
},
{
  id: 9,
  name: 'Office Days'
},
{
  id: 10,
  name: 'Currency'
}]

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
  <div className={styles.headingSection}>
    <Container>
      <Row>
        <Col>
         <Heading type="h1">Datasets</Heading>
        </Col>
      </Row>
    </Container>
  </div>
  <div className={styles.formSection}>
    <Container>
      <Row>
        <Col>
        <InputGroup>
          <FormControl
            placeholder="Press Enter To Search"
            aria-label="Press Enter To Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Filter</Button>
          </InputGroup.Append>
        </InputGroup>
        </Col>
      </Row>
    </Container>
  </div>
  <div className={styles.requestSection}>
    <Container>
      <Row>
        <Col>
          <div className={styles.requestBtn}>
          <ListGroup horizontal>
          {newsJson.map((json)=>{
            return (
            <ListGroup.Item id={json.id} className={styles.requestList}>
                <Button variant="dark">{json.name}</Button>
            </ListGroup.Item>
            )
          })}
          </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
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
