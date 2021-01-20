import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = ({
  photoProcessor,
  timerSeconds = 3,
  multiple = false,
}) => {
  const [deviceId, setDeviceId] = React.useState({});
  const [cameraLoader, setCameraLoader] = React.useState(true);
  const [devices, setDevices] = React.useState([]);
  const [timeLeft, setTimeLeft] = React.useState(timerSeconds);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({
      height: 240,
      width: 320,
    });
    photoProcessor(imageSrc);
  }, [webcamRef, photoProcessor]);

  const captureMany = (many = 5) => {
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

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
      if (timeLeft === 0) {
        if (multiple) {
          captureMany();
        } else {
          capture();
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [capture, timeLeft]);

  return (
    <>
      {cameraLoader && "Allow camera to start taking pictures"}

      <Webcam
        ref={webcamRef}
        audio={false}
        videoConstraints={{ deviceId }}
        onUserMedia={() => setCameraLoader(false)}
      />
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
        {timeLeft}
        {/* <button onClick={capture}>take one pic</button>
        <button onClick={() => captureMany(10)}>take 10 pictures</button> */}
      </div>
    </>
  );
};

export default WebcamCapture;
