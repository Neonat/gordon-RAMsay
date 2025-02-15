import styles from "./LeftScreen.module.css";

const LeftScreen = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.leftScreen} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeButton} onClick={onClose}>✕</button>
      <h2>Meal Review</h2>
      <p>Rate your meal and explore ingredient substitutes!</p>
      {/* Add content here */}
    </div>
  );
};

export default LeftScreen;
