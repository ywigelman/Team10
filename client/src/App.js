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
      {camera && <WebcamCapture photoProcessor={processPhotos} />}      
      <button onClick={() => setCamera(!camera)}>toggle camera</button>
      <div>
          {imgSrc.map((item, i) => (
            <img src={item} key={i} alt={i} />
          ))}
        </div>
    </div>
  );
}

export default App;
