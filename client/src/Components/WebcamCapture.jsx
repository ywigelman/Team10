import React from "react";
import { Spinner } from "react-bootstrap";
import Webcam from "react-webcam";

const WebcamCapture = ({
  photoProcessor,
  timerSeconds = 4,
  multiple = false,
  size = 350,
}) => {
  const [deviceId, setDeviceId] = React.useState({});
  const [cameraLoader, setCameraLoader] = React.useState(true);
  const [devices, setDevices] = React.useState([]);
  const [timeLeft, setTimeLeft] = React.useState(timerSeconds);
  const [pictureTaken, setPictureTaken] = React.useState();

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPictureTaken(imageSrc);
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
      <div
        style={{
          position: "relative",
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#dadedf",
        }}
      >
        <Webcam
          style={{ height: "100%", margin: "0 auto" }}
          ref={webcamRef}
          audio={false}
          videoConstraints={{ deviceId }}
          onUserMedia={() => setCameraLoader(false)}
          screenshotFormat="image/jpeg"
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              timeLeft < 0
                ? "inset 0px 0px 20px 10px rgba(255,255,255,0.6)"
                : "",
          }}
        >
          {cameraLoader && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          {!cameraLoader && timeLeft > 0 && (
            <h1
              style={{
                fontSize: "7rem",
                color: "white",
                "-webkit-text-stroke": "2px black",
              }}
            >
              {timeLeft}
            </h1>
          )}
          {!cameraLoader && timeLeft <= 0 && <img src={pictureTaken} />}
          {!cameraLoader && timeLeft < 0 && (
            <div
              style={{
                height: "101%",
                width: "101%",
                boxShadow: "inset 0px 0px 20px 10px rgba(255,255,255,0.6)",
                position: "absolute",
                borderRadius: "100%",
              }}
            ></div>
          )}
        </div>
      </div>

      {/* <div>
          {devices.map((device, key) => (
            <button
              key={device.deviceId}
              onClick={() => setDeviceId(device.deviceId)}
            >
              {device.label || `Device ${key + 1}`}
            </button>
          ))}
      </div> */}
    </>
  );
};

export default WebcamCapture;
