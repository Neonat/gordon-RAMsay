import styles from "./ratelist.module.css";

const RateList = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.ratelist} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeButton} onClick={onClose}>✕</button>
      <h2>How was your meal?</h2>
      <p>Rate your meal and explore ingredient substitutes!</p>
      {/* Add content here */}
    </div>
  );
};

export default RateList;
