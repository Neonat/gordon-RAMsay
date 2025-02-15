import React from 'react';
import MyNavbar from './components/navbar.jsx';  // Now importing Navbar.jsx
import TextProcessor from './components/TextProcessor/TextProcessor.jsx'; 

function App() {
  return (
    <div>
      <MyNavbar />
      <TextProcessor />
    </div>
  );
}

export default App;
