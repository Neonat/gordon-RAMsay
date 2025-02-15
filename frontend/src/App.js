// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewNavBar from "./components/navbar";
import Login from "./pages/login";
import Form from "./pages/form";
import Home from "./components/Home";
import AccountCreate from "./pages/accountCreate"; // Import the new component
import IngredientList from "./components/IngredientList"; // Import this
import "bootstrap/dist/css/bootstrap.min.css";
import CameraApp from "./pages/CameraApp" //New webcam

const recipesData = [
  { name: "For the kids, dinner", ingredientsCount: "0/16" },
  { name: "wife's favourite shepard's pie", ingredientsCount: "5/11" },
  { name: "vietnamese spring rolls", ingredientsCount: "9/9" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NewNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/create-account" element={<AccountCreate />} />
          <Route
            path="/ingredients"
            element={<IngredientList recipes={recipesData} />}
          />
          <Route path="/camera" element={<CameraApp/>}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


