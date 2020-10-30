import React from 'react';
import PropTypes from 'prop-types'
import Grid from '../Grid'
import Heading from '../Heading'
import styles from './searchsection.scss';
import TopCategories from './TopCategories';
import Search from './Search'

const SearchSection = (props) => {
	const { title, searchBtnText, topCategoriesData } = props;
   return (
		<>
			<div className={styles.headingSection}>
				<Grid>
					<Heading type="h1">{title}</Heading>
				</Grid>
	 		</div>
			<div className={styles.formSection}>
				<Search searchBtnText={searchBtnText}/>
			</div>
			<TopCategories topCategories={topCategoriesData}/>
		</>
	 )
}

/** Props **/
SearchSection.defaultProps = {
	title: '',
	searchBtnText: 'search',
	topCategoriesData: []
}

SearchSection.propTypes = {
	title: PropTypes.string,
	searchBtnText: PropTypes.string,
	topCategoriesData: PropTypes.array
}

export default SearchSection;
