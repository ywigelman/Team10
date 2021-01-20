import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import WebcamCapture from "./WebcamCapture";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
          Sign the Following Letter:
          <br />
          <h2>{letter}</h2>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center" }} className="mb-3">
          {/* <Col xs={6} md={4}> */}
            {activateWebcam && <WebcamCapture photoProcessor={handleUpload} />}
          {/* </Col> */}
        </Row>
        <Row className="justify-content-around">
          {/* <Col md={2}> */}
            <Button onClick={() => prev()} style={{backgroundColor:'#6800F4'}}>
              <FontAwesomeIcon icon="fast-backward"/>
            </Button>
          {/* </Col> */}
          {/* <Col md={3} className="ml-5"> */}
            <Button onClick={() => reset()} variant="danger">
              <FontAwesomeIcon icon="redo"/>
            </Button>
          {/* </Col> */}
          {/* <Col md={3}> */}
            <Button onClick={() => next()} style={{backgroundColor:'#6800F4'}}> 
              <FontAwesomeIcon icon="fast-forward" />
            </Button>
          {/* </Col> */}
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
