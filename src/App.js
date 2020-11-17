import React from 'react';

import './App.css';
import MapComponent from './components/MapComponent';
import QuakesComponent from './components/QuakesComponent';

function App() {
  return (
    <div className="app">
      <div className="mapContainer">
        <MapComponent />
      </div>
      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        <QuakesComponent />
      </div>
    </div>
  );
}

export default App;
