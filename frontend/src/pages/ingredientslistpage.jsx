// src/pages/IngredientsPage.jsx
import React from "react";
import IngredientList from "../components/IngredientList/IngredientList.jsx"; // Import the IngredientList component
import NewNavBar from '../components/NavBar/navbar.jsx'

function IngredientPage() {
  const recipes = [
    { name: "Pasta", ingredientsCount: "5 / 8" },
    { name: "Pizza", ingredientsCount: "8 / 8" },
  ];

  return (
    <div>
        <NewNavBar />
      <IngredientList recipes={recipes} /> {/* Pass the recipes prop */}
       </div>
  );
}

export default IngredientPage;