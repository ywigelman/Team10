import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import WebcamCapture from "./WebcamCapture";
export default function GameCard(props) {
  const { letter, position, total, next, prev } = props;

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

  return (
    <Card>
      <Container>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          Make the Following Letter:
          <br />
          <h2>{letter}</h2>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col xs={6} md={4}>
            {activateWebcam && <WebcamCapture photoProcessor={handleUpload} />}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} style={{ alignItems: "center" }}>
            <Button onClick={() => prev()}> Prev </Button>
          </Col>
          <Col md={4} style={{ alignItems: "center" }}>
            <Button onClick={() => reset()}>Try Again</Button>
          </Col>
          <Col md={4} style={{ alignItems: "center" }}>
            <Button onClick={() => next()}> Next </Button>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col>
            <ProgressBar animated now={(position / total) * 100} />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
