import { useState } from "react";
import styles from "./IngredientItem.module.css";
import { FaEdit } from "react-icons/fa";
import Checkbox from "./checkbox";
import RateList from "./ratelist"; 
import CategoryItem from "./CategoryItem";
import IngredientItem from "./IngredientItem";
import React, { useState } from 'react';

const App = () => {
  // Step 1: Create state to toggle visibility of the small screen
  const [showSmallScreen, setShowSmallScreen] = useState(false);

  // Step 2: Handle the button click to toggle the small screen
  const handleReplaceClick = () => {
    setShowSmallScreen(!showSmallScreen);
  };
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleReplaceClick}>
        {showSmallScreen ? 'Hide Small Screen' : 'Show Small Screen'}
      </button>

      {/* Step 3: Conditionally render the small screen inside the same screen */}
      <div style={styles.screenContainer}>
        {showSmallScreen ? (
          <SmallScreen />
        ) : (
          <OpenList/>
        )}
      </div>
    </div>
  );
};

const OpenList = ({ name, quantity }) => {
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
      <RateList isOpen={isChecked} onClose={() => setIsChecked(false)} />
      <div className="p-4">
      <CategoryItem title="Produce" count={7} total={7}>
        <IngredientItem name="Lettuce" quantity="1 bunch" />
      </CategoryItem>

      <CategoryItem title="Ethnic Food" count={2} total={2}>
        <IngredientItem name="Spring Roll Wrapper" quantity="1 sq." />
      </CategoryItem>
    </div>
        
    </>
  );
};

export default OpenList;
