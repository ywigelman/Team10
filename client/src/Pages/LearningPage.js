import React, { useState } from "react";
import WebcamCapture from "../Components/WebcamCapture";
import { Button } from "react-bootstrap";
import axios from "axios";

const tutorial = ['A','B','C','D','E','F','G']

export function LearningPage() {
    
    // exercise position handling
    const [position, setPosition] = useState(0);

    const nextPosition = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
    }
    const prevPosition = () => {
        if (position < tutorial.length - 1) {
            setPosition(position + 1)
        }
    }
    // props for MainScreen ->
    // position={position} total={tutorial.length - 1} next={nextPosition} prev={prevPosition} 
    

    // put all these inside MainScreen component
    //-start
    const [activateWebcam, setActivateWebcam] = useState(true);
    const reset = () => {
        setActivateWebcam(false);
        setTimeout(() => {
        setActivateWebcam(true);
        }, 0);
    };

    const handleUpload = (image) => {
        console.log("got here", image);
    };
    //-end

  return (
    <>
      <h1>Learning Page</h1>
      {activateWebcam && <WebcamCapture photoProcessor={handleUpload} />}
      <Button onClick={reset}>Try Again</Button>
    </>
  );
}
