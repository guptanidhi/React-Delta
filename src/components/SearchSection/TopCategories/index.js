import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Grid from "../../Grid";
import styles from "./topCategories.module.scss";

const TopCategories = ({ topCategories }) => {
  return (
    <div className={styles.requestSection}>
      <Grid>
        <div className={styles.requestBtn}>
          {topCategories.map((item) => (
            <div key={item.id} id={item.id} className={styles.requestList}>
              <Button variant="dark">{item.name}</Button>
            </div>
          ))}
        </div>
      </Grid>
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
