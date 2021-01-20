import React from 'react';
import { CountdownClock } from '../Components/CountdownClock';
import WebcamCapture from '../Components/WebcamCapture';
import axios from 'axios';

export function LearningPage() {

    const handleUpload = (image) => {
        console.log("got here", image)
        axios.post('http://localhost:5000/')
    }

    return (<>
        <h1>Learning Page</h1>
        <WebcamCapture photoProcessor={handleUpload} />
        <CountdownClock />
    </>)
}