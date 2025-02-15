// src/components/IngredientList.js
import React, { useState } from "react";
import "./IngredientList.css";
import CameraAppComponent from "./CameraComponent"; //Correct Name

function IngredientList({ recipes }) {
  const [isManualEntryOpen, setIsManualEntryOpen] = useState(false);
  const [manualEntryText, setManualEntryText] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false); // State for camera

  const handleManualEntryClick = () => {
    setIsManualEntryOpen(!isManualEntryOpen); // Toggle the state
  };

  const handleManualEntryChange = (event) => {
    setManualEntryText(event.target.value); // Update the text in the input
  };

  const handleCameraClick = () => {
    setIsCameraOpen(!isCameraOpen); // Toggle the camera state
  };

  // Check if recipes is an array and is not empty
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <p>No recipes to display.</p>;
  }

  return (
    <div className="ingredient-list-container">
      <h1>Ingredients List</h1>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div className="recipe-item" key={index}>
            <div className="recipe-name">{recipe.name}</div>
            <div className="recipe-actions">
              <button className="add-share-button">+ Share</button>
            </div>
            <div className="recipe-details">
              <span className="shopping-cart-icon">🛒</span>
              <span className="ingredients-count">{recipe.ingredientsCount}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="input-options">
        <div className="manual-entry" onClick={handleManualEntryClick}>
          ✏️Manual Entry
        </div>
        <div className="camera-mode" onClick={handleCameraClick}>
          📷Camera mode
        </div>
      </div>

      {isManualEntryOpen && ( // handle manual entry once manual button is pressed.
        <div className="manual-entry-area">
          <h3>Add Ingredients:</h3>
          <textarea
            value={manualEntryText}
            onChange={handleManualEntryChange}
            placeholder="Enter ingredients here..."
          />
        </div>
      )}
      {isCameraOpen && (
        <div className="camera-view">
          <CameraAppComponent /> {/*  the CAMERA is running on all of the screens */}
        </div>
      )}
    </div>
  );
}

export default IngredientList;