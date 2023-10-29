// src/TopNav.js
import React from 'react';
import './TopNav.css';

function TopNav() {
  return (
    <nav className="topnav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default TopNav;
