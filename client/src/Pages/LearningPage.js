import React, { useState } from "react";
import WebcamCapture from "../Components/WebcamCapture";
import { Button } from "react-bootstrap";
import axios from "axios";

export function LearningPage() {
  const [activateWebcam, setActivateWebcam] = useState(true);

  const reset = () => {
    setActivateWebcam(false);
    setTimeout(() => {
      setActivateWebcam(true);
    }, 0);
  };

  const handleUpload = (image) => {
    console.log("got here", image);
    // axios.post('http://localhost:5000/') // can do this later 
  };

  return (
    <>
      <h1>Learning Page</h1>
      {activateWebcam && <WebcamCapture photoProcessor={handleUpload} />}
      <Button onClick={reset}>Try Again</Button>
    </>
  );
}
