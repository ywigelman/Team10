import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function MainScreen() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Button> Prev </Button>
        </Col>
        <Col md={6}>
          <Button> Next </Button>
        </Col>
      </Row>
      <Row>
        <ProgressBar animated now={45} />
      </Row>
    </Container>
  );
}
