import { useState } from "react";
import styles from "./IngredientItem.module.css";
import { FaEdit } from "react-icons/fa";
import Checkbox from "./checkbox";
import LeftScreen from "./LeftScreen"; // Import the left screen

const IngredientItem = ({ name, quantity }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className={styles.item}>
        <Checkbox checked={isChecked} onToggle={handleToggle} />
        <span className={isChecked ? styles.completed : ""}>{name}</span>
        <span>{quantity}</span>
        <FaEdit className={styles.icon} />
      </div>

      {/* Left screen that slides up */}
      <LeftScreen isOpen={isChecked} onClose={() => setIsChecked(false)} />
    </>
  );
};

export default IngredientItem;
