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
    // <div className="bottom-nav">
    //         <div className="nav-item">
    //             <img src={homeIcon} alt="Home Button" />
    //         </div>
    //         <div className="nav-item">
    //             <img src={energyIcon} alt="Charge Status Button" />
    //         </div>
    //         <div className="nav-item">
    //             <img src={weatherIcon} alt="Weather Button" />
    //         </div>
    // </div>
    <div className="bottom-nav">
    <div
      className={`nav-item ${activeTab === 'home' ? 'selected' : ''}`}
      onClick={() => handleItemClick('home')}
    >
      <img src={homeIcon} alt="Home" />
      <span>Home</span>
    </div>
    <div
      className={`nav-item ${activeTab === 'search' ? 'selected' : ''}`}
      onClick={() => handleItemClick('search')}
    >
      <img src={energyIcon} alt="Search" />
      <span>Search</span>
    </div>
    <div
      className={`nav-item ${activeTab === 'profile' ? 'selected' : ''}`}
      onClick={() => handleItemClick('profile')}
    >
      <img src={weatherIcon} alt="Profile" />
      <span>Profile</span>
    </div>
  </div>
  );
};

export default NavBar;