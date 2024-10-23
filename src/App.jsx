import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the current background color
  const [bgColor, setBgColor] = useState('#ffffff'); // default white

  // Function to generate a random color
  const changeBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="content">
        <h1>Background Color Changer</h1>
        <button onClick={changeBackgroundColor}>Change Background</button>
      </div>
    </div>
  );
}

export default App;
