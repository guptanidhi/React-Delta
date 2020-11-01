import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import styles from "./topCategories.module.scss";

const TopCategories = ({ topCategories }) => {
  return (
    <div className={styles.requestSection}>
        <div className={styles.requestBtn}>
          {topCategories.map((item) => (
            <div key={item.id} id={item.id} className={styles.requestList}>
              <Button variant="outline-secondary" size="sm">{item.name}</Button>
            </div>
          ))}
        </div>
    </div>
  );
};

/** Props **/
TopCategories.defaultProps = {
  topCategories: [],
};

TopCategories.propTypes = {
  topCategories: PropTypes.array,
};

export default TopCategories;
