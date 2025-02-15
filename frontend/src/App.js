import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewNavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
      <div className='App'>
        <NewNavBar />
      </div>
    );
};

export default App