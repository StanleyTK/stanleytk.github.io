import React from 'react';
import './css_files/Navbar.css'; // Import your CSS file

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/">My_Portfolio</a></li>
        <li><a href="/about">Pathfinding_Algorithm_Visualizer</a></li>
        <li><a href="/services">Sudoku?</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;