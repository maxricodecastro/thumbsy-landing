import React, { useState, useEffect } from 'react';
import './App.css';
import treeImage from './tree.webp';

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = treeImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="App">
      <div className="mobile-header">
        <h1 className="heading-1">Knowing what you're buying</h1>
        <h2 className="heading-2">should be as simple as possible.</h2>
      </div>
      <div className="tree-container">
        <img 
          src={treeImage}
          alt="Tree background"
          className="tree-image"
          loading="eager"
          fetchpriority="high"
        />
      </div>
    </div>
  );
}

export default App;
