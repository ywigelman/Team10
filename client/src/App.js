import './App.css';
import WebcamCapture from './Components/WebcamCapture';
import React, { useState } from 'react';

function App() {
  const [camera, setCamera] = useState(false)
  const [imgSrc, setImgSrc] = React.useState([]);

  const processPhotos = (photo) => {
    setImgSrc([photo, ...imgSrc]);
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
