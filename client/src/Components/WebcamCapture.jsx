import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const [deviceId, setDeviceId] = React.useState({});
  const [cameraLoader, setCameraLoader] = React.useState(true);
  const [devices, setDevices] = React.useState([]);
  const [imgSrc, setImgSrc] = React.useState([]);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({
      height: 240,
      width: 320,
    });
    setImgSrc((images) => [imageSrc, ...images]);
  }, [webcamRef, setImgSrc]);

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
        <button onClick={capture}>take one pic</button>
        <button onClick={() => captureMany(10)}>take 10 pictures</button>
      </div>
      <div>
        {imgSrc.map((item, i) => (
          <img src={item} key={i} alt={i} />
        ))}
      </div>
    </>
  );
};

export default WebcamCapture;
