// src/components/Header.js
import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import extramusImage from '../images/extramus_image.png';
import downIcon from '../images/caret-down-solid.svg';
import { UserContext } from '../WindowContainer';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [date] = useState('01 September 2021');
  const [name] = useState('Ebube Samuel');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const {currentUser,setCurrentUser} = useContext(UserContext);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(()=>{
    if(!currentUser) navigate('/login')
  },[currentUser])

  const handleLogOut = ()=>{
    setCurrentUser(false);
    Cookies.remove("current-user");
    navigate('/login')
  }

  return (
    <header className="header">
      <img src={extramusImage} alt="Extramus Logo" className="logo" />
      <div className="header-right poppins-extrabold">
        <span className="poppins-extrabold">{date}</span>
        <span className="column"></span>
        <i className="fa-regular fa-bell notification-icon"></i>
        <span className="poppins-extrabold">{currentUser.name}</span>
        <img className="icon" src={downIcon} alt="Dropdown Icon" onClick={toggleDropdown} />
        {dropdownVisible && (
          <div className="dropdown-menu">
            <div onClick={handleLogOut} className="dropdown-item">
              <i className="fa fa-sign-out"></i>
              <span >Sign Out</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
