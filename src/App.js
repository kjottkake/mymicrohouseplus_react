import React, { Component, useState } from 'react';
import './App.css';
import NavBar from './components/bottomnavbar';

import HomePanel from './components/HomePanel';
import EnergyPanel from './components/EnergyPanel';
import WeatherPanel from './components/WeatherPanel';
import TestPage from './components/TestPage';

function App() {
  console.log(window.location) //logs out where I'm currently at

  let component
  switch(window.location.pathname){
    case "/":
      component = <HomePanel />
      break
    case "/energy":
      component = <EnergyPanel />
      break
    case "/weather":
      component = <WeatherPanel />
      break  
    case "/test":
      component = < TestPage/>
      break  
  }


  return (
    <div className="App">
      <NavBar />
      {component}
    </div>
  );
}

export default App;
