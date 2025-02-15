import React from 'react';
import MyNavbar from './components/NavBar/navbar.jsx';  // Now importing Navbar.jsx
import TextProcessor from './components/TextProcessor/TextProcessor.jsx'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IngredientsPage from './pages/ingredientlistpage.jsx';
import TextInputPage from './pages/textinputpage.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IngredientsPage />} />
        {/* Add other routes here */}
        <Route path="/textinput" element={<TextInputPage />} />
        <Route path="/camera" element={<CameraPage />}
      </Routes>
    </Router>
  );
}

export default App;
