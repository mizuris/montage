import React from "react";
import styles from "../styles/ContactBox.module.css";

function ContactBox({ icon, text }) {
  return (
    <div className={styles.contactBox}>
      <i>{icon}</i> <span className={styles.divider}>|</span>
      <span>{text}</span>
    </div>
  );
}

export default ContactBox;
