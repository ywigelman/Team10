import React from "react";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

export function Home() {
  return (
    <Card>
      <h1>Welcome to Sign&Shoot</h1>
      <InputGroup>
        <FormControl
          placeholder="Please Enter your Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Done</Button>
        </InputGroup.Append>
      </InputGroup>
    </Card>
  );
}
