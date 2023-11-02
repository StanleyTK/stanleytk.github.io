import './App.css';
import React from "react";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience"
import Pathfinding from "./components/Pathfinding"
import Sudoku from "./components/Sudoku.js"

import Contact from "./components/Contact"

import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import necessary components

function App() {
  return (
    <BrowserRouter> 
      <div>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/sudoku" element={<Sudoku />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;