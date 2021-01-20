import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = ({ active, photoProcessor }) => {
  const [deviceId, setDeviceId] = React.useState({});
  const [cameraLoader, setCameraLoader] = React.useState(true);
  const [devices, setDevices] = React.useState([]);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({
      height: 240,
      width: 320,
    });
    console.log(webcamRef.current.getScreenshot());
    photoProcessor(imageSrc);
  }, [webcamRef, photoProcessor]);

  const captureMany = (many) => {
    let count = 1;
    const interval = setInterval(() => {
      capture();
      count++;
      if (count > many) {
        clearInterval(interval);
      }
    }, 200);
  };

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  if (active)
    return (
      <>
        {cameraLoader && "Allow camera to start taking pictures"}
        {active && (
          <Webcam
            ref={webcamRef}
            audio={false}
            videoConstraints={{ deviceId }}
            onUserMedia={() => setCameraLoader(false)}
          />
        )}
        <div>
          {devices.map((device, key) => (
            <button
              key={device.deviceId}
              onClick={() => setDeviceId(device.deviceId)}
            >
              {device.label || `Device ${key + 1}`}
            </button>
          ))}
        </div>
        <div>
          <button onClick={capture}>take one pic</button>
          <button onClick={() => captureMany(10)}>take 10 pictures</button>
        </div>
      </>
    );

  return <div>Camera not active</div>;
};

export default WebcamCapture;
