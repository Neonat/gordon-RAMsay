// src/pages/IngredientsPage.jsx
import React from "react";
import IngredientList from "../components/IngredientList/IngredientList.jsx"; // Import the IngredientList component

function IngredientsPage() {
  const recipes = [
    { name: "Pasta", ingredientsCount: 5 },
    { name: "Pizza", ingredientsCount: 8 },
  ];

  return (
    <div>
      <h1>Welcome to the Recipe App</h1>
      <IngredientList recipes={recipes} /> {/* Pass the recipes prop */}
    </div>
  );
}

export default IngredientsPage;