import React from "react";
import styles from "../styles/Header.module.css";

function Header({ title, data, xOffset, yOffset }) {
  return (
    <h1
      data-header={title}
      className={styles.customHeader}
      style={{ bottom: yOffset, left: xOffset }}
    >
      {title}
    </h1>
  );
}

export default Header;
