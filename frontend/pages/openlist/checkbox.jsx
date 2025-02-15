import { useState } from "react";
import styles from "./Checkbox.module.css";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const Checkbox = ({ checked, onToggle }) => {
  return (
    <button className={styles.checkbox} onClick={onToggle}>
      {checked ? <FaCheckSquare className={styles.checked} /> : <FaRegSquare className={styles.unchecked} />}
    </button>
  );
};

export default Checkbox