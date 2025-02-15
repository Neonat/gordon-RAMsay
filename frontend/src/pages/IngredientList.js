// src/components/IngredientList.js
import React from 'react';
import './IngredientList.css'; // Create this file

function IngredientList({ recipes }) {
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
                <div className="manual-entry">✏️Manual Entry</div>
                <div className="camera-mode">📷Camera mode</div>
            </div>
        </div>
    );
}

export default IngredientList;