import React from 'react';
import Slider from "react-slick";
import CardCustom from '../Card'
import Grid from '../Grid'
import style from './slider.module.scss'

function SliderCustom({slides}) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        centerPadding: "60px",
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Grid>
          <Slider {...settings}>
            {slides.map((slide)=>{
              return <div className={style.slideWrapper}><CardCustom data={slide}/></div>
            })}
          </Slider>
        </Grid>
    )
}

export default SliderCustom
