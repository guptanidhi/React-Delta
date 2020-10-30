import React from 'react';
import PropTypes from 'prop-types'
import Grid from '../../Grid'
import {Button, ListGroup } from 'react-bootstrap';
import styles from './styles.module.scss';


const TopCategories = ({topCategories}) => {
   return (
    <div className={styles.requestSection}>
			<Grid>
				<div className={styles.requestBtn}>
					<ListGroup horizontal>
						{topCategories.map((item)=>(
							<ListGroup.Item id={item.id} className={styles.requestList}>
								<Button variant="dark">{item.name}</Button>
							</ListGroup.Item>)
						)}
					</ListGroup>
				</div>
			</Grid>
    </div>
   )
}

/** Props **/
TopCategories.defaultProps = {
	topCategories: []
}

TopCategories.propTypes = {
	topCategories: PropTypes.array
}

export default TopCategories;
