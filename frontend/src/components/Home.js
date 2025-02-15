// src/components/Home.js
import React from 'react';
import IngredientList from "../pages/IngredientList"; // Correct relative path

const recipesData = [
  { name: "For the kids, dinner", ingredientsCount: "0/16" },
  { name: "wife's favourite shepard's pie", ingredientsCount: "5/11" },
  { name: "vietnamese spring rolls", ingredientsCount: "9/9" },
];

function Home() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Welcome to Gordon-RAMsay</h2>
            <h2>Log in and lock in a healthier you.</h2>
            <h2><IngredientList recipes = {recipesData} /></h2>
        </div>
    );
}

export default Home;