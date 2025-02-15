import styles from "./ratelist.module.css";
import React from "react";
import ShareRecipe from "./components/shafrontend/components/sharerecipe.jsxrerecipe";


const RateList = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.ratelist} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeButton} onClick={onClose}>✕</button>
      <h2>How was your meal?</h2>
      <p>Rate your meal and explore ingredient substitutes!</p>
      {/* Add content here */}
      <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>

            {/* Share Recipe Component */}
            <ShareRecipe recipe={recipe} />
    </div>
  );
};

export default RateList;
