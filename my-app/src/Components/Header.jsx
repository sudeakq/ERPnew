// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import extramus_image from '../images/extramus_image.png';
import downIcon from '../images/caret-down-solid.svg'

const Header = () => {

  const [date,setData] = useState('01 September 2021')

  const [name,setName] = useState('Ebube Samuel')

  return (
    <header className="header">
      <img src={extramus_image} alt='extramus_image.png' />
      <div className="header-right poppins-extrabold ">
        <span className='poppins-extrabold' > {date} </span>
        <span className='column' ></span>
        <i className="fa-regular fa-bell notification-icon" ></i>
        <span className='poppins-extrabold' > {name} </span>
        <img className='icon' src={downIcon} alt="" />
      </div>
    </header>
  );
};

export default Header;
