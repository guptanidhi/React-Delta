import React from 'react';
import PropTypes from 'prop-types'
import Grid from '../Grid'
import Heading from '../Heading'
import TopCategories from './TopCategories';
import Search from './Search'
import styles from './searchsection.module.scss'

const SearchSection = (props) => {
	const { title, searchBtnText, topCategoriesData } = props;
   return (
		<React.Fragment>
			<div className={styles.headingSection}>
				<Grid>
					<div className={styles.alignSection}>
					<div className={styles.headingWrapper}>
					 <Heading type="h2">{title}</Heading>
					</div>
					<Search searchBtnText={searchBtnText}/>
					<TopCategories topCategories={topCategoriesData}/>
					</div>
				</Grid>
	 		</div>
		</React.Fragment>
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
