import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import CustomNavbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import styles from './app.module.scss';
import CustomSlider from './components/Slider'
import { topCategories, navItems, sliderSettings } from './jsonData/data';
import carouselData from './jsonData/carouselData'

const App = () => (
  <React.Fragment>
    
    <CustomNavbar navItems={navItems} />
    <SearchSection
      title="Detasets"
      searchBtnText="Filter"
      topCategoriesData={topCategories} />
    <div className={styles.carouselSection}>
      <CustomSlider slides={carouselData} sliderSettingObj={sliderSettings} />
    </div>
  </React.Fragment>
);

export default App;
