import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import NavbarCustom from './Component/Navbar';
import SearchSection from './Component/SearchSection';
import styles from './styles.module.scss';
import topCategories from './topCategories';
import SliderCustom from './Component/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Json from './template'
function App() {
  console.log(Json)
  return (
  <>
    <NavbarCustom />
    <SearchSection title="DeltaSets" searchBtnText="Filter" topCategoriesData={topCategories} />
    <div className={styles.carouselSection}>
      <SliderCustom slides={Json}/>
    </div>
  </>
  );
}

export default App;
