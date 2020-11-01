import React from "react";
import styles from "./icon.module.scss";

function Icon({ icon }) {
  return (
    <span className={`${styles[icon]} ${styles.icon}`}></span>
  );
}


export default Icon;
