import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import style from './slider.module.scss'
import CustomCard from '../Card'
import Grid from '../Grid'
import { sliderSettings } from '../../jsonData/data';

const CustomSlider = ({ carouselTitle, slides, sliderSettingObj }) => {   
	return (
		<Grid>
			<div className={style.title}>{carouselTitle}</div>
			<Slider {...sliderSettingObj}>
				{slides.map((slide) => (
					<div key={slide.id} className={style.slideWrapper}>
						<CustomCard data={slide}/>
					</div>
				))}
			</Slider>
		</Grid>
	)
}

/** Props **/
CustomSlider.defaultProps = {
	carouselTitle: '',
	slides: [],
	sliderSettingObj: sliderSettings
}

CustomSlider.propTypes = {
	carouselTitle: PropTypes.string,
	slides: PropTypes.array,
	sliderSettingObj: PropTypes.object
}

export default CustomSlider
