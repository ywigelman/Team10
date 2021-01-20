import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
export function About() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card>
            <Card.Body>
              <h2>About Sign&Shoot </h2>
              <p>
                Our Main goal is to make Sign Language accessible world-wide
                with a easy to use app and friendly interface{" "}
              </p>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
