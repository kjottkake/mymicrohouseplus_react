import React, { useState } from 'react';
import './App.css';
import NavBar from './components/bottomnavbar';

import HomePanel from './components/HomePanel';
import EnergyPanel from './components/EnergyPanel';
import WeatherPanel from './components/WeatherPanel';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <div className="App">
      <div className='app-container'>
      <NavBar activeTab={activeTab} handleTabChange={handleTabChange} />
      {activeTab === 'home' && <HomePanel />}
      {activeTab === 'energy' && <EnergyPanel />}
      {activeTab === 'weather' && <WeatherPanel />}
      <h1>Test</h1>
      </div>
    </div>
  );
}

export default App;
