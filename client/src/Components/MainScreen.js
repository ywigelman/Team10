import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Button, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function MainScreen() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
      </Row>
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
