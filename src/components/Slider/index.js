import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import style from './slider.module.scss'
import CustomCard from '../Card'
import Grid from '../Grid'
import { sliderSettings } from '../../jsonData/data';

const CustomSlider = ({ slides, sliderSettingObj }) => {   
	return (
		<Grid>
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
	sliderSettingObj: sliderSettings
}

CustomSlider.propTypes = {
	sliderSettingObj: PropTypes.object
}

export default CustomSlider
