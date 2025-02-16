import React from 'react';
import MyNavbar from './components/NavBar/navbar.jsx';  // Now importing Navbar.jsx //remove if not in use
import TextProcessor from './components/TextProcessor/TextProcessor.jsx';  //remove if not in use
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IngredientsPage from './pages/ingredientslistpage.jsx';
import TextInputPage from './pages/textinputpage.jsx';
import CameraPage from "./pages/camerapage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ingredientspage" element={<IngredientsPage />} />
        {/* Add other routes here */}
        <Route path="/textinput" element={<TextInputPage />} />
        <Route path="/camera" element={<CameraPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
