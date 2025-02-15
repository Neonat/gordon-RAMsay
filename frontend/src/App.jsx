import React from 'react';
import MyNavbar from './components/navbar.jsx';  // Now importing Navbar.jsx
import TextProcessor from './components/TextProcessor/TextProcessor.jsx'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IngredientsPage from './pages/ingredientlistpage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IngredientsPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
