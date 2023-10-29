// components/NavBar.js
import React from 'react';
import homeIcon from '../assets/icons/home.png'
import energyIcon from '../assets/icons/flash.png'
import weatherIcon from '../assets/icons/cloudy-day.png'
const NavBar = ({ activeTab, handleTabChange }) => {

    const handleItemClick = (tabName) => {
        // Call the handleTabChange function when an item is clicked
        handleTabChange(tabName);
      };

  return (
    <div className="bottom-nav">
            <div className="nav-item">
                <a href='/'>
                    <img src={homeIcon} alt="Home Button" />
                </a>
            </div>
            <div className="nav-item">
                <a href='/energy'>
                    <img src={energyIcon} alt="Charge Status Button" />
                </a>
            </div>
            <div className="nav-item">
                <a href='/weather'>
                <img src={weatherIcon} alt="Weather Button" />
                </a>
            </div>
    </div>
  );
};

export default NavBar;