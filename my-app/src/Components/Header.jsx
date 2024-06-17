// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Extramus</h1>
      <div className="header-right">
        <span>28 August 2024</span>
        <span> | </span>
        <span>Ebube Samuel</span>
      </div>
    </header>
  );
};

export default Header;
