import React from 'react'
import PropTypes from 'prop-types'
import {InputGroup, FormControl, Button } from 'react-bootstrap';
import style from './search.module.scss'
import Icon from '../../Icon'

const Search = ({searchBtnText, searchPlaceHolder}) => {
  return (		
			<InputGroup className={style.inputWrapper}>
				<FormControl
				    className={style.searchInput}
					placeholder={searchPlaceHolder}
					aria-label="Press Enter To Search"
					aria-describedby="basic-addon2"
				/>
				<InputGroup.Append>
					<Button variant="outline-secondary"> <Icon icon="filter"/> {searchBtnText}</Button>
				</InputGroup.Append>
			</InputGroup>
	)
}

/** Props **/
Search.defaultProps = {
	searchPlaceHolder: 'Press Enter To Search',
	searchBtnText: 'search'
}

Search.propTypes = {
	searchPlaceHolder: PropTypes.string,
	searchBtnText: PropTypes.string
}

export default Search