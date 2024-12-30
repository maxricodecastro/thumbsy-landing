import React from 'react';
import './App.css';
import thumbsyLogo from './thumbsy.png';

function App() {
  return (
    <div className="App">
      <div className="white-box">
        <img src={thumbsyLogo} alt="Thumbsy Logo" className="logo" />
        <h1 className="heading-1">Knowing what you're buying</h1>
        <h2 className="heading-2">should be as simple as possible.</h2>
        <div className="divider"></div>
        <p className="description">
          Thumbsy is an app which helps you get the reviews you want instantly in person. Just scan a barcode and access thousands of customer insights online
        </p>
        <p className="beta-text">
          We are continuously updating the app and would love to take you along for the ride. Want to join us in our beta testing? Click the link below.
        </p>
        <button className="try-button">
          <span className="try-text">Try it</span>
          <span className="now-text">now</span>
        </button>
      </div>
      <div className="about-us">About us</div>
    </div>
  );
}

export default App;
