import React from "react";
import PropTypes from "prop-types";
import styles from "./heading.module.scss";

const Heading = ({ children, type }) => {
  const Ele = type;
  return <Ele className={styles.Heading}>{children}</Ele>;
};

/** Props **/
Heading.defaultProps = {
  children: null,
	type: 'h6'
};

Heading.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

export default Heading;
