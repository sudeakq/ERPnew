// src/components/Header.js
import React from 'react';
import './Header.css';
import extramus_image from '../images/extramus_image.png';

const Header = () => {
  return (
    <header className="header">
      <img src={extramus_image} alt='extramus_image.png' />
      <div className="header-right">
        <span>01 September 2021</span>
        <span>|</span>
        <span>Ebube Samuel</span>
      </div>
    </header>
  );
};

export default Header;
