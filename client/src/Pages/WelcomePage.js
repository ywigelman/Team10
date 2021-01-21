import React, { useState } from "react";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

export function WelcomePage(props) {
  const [disabled, setDisabled] = useState(true);
  const [ firstName , setFirstName ] = useState('');

  const handleButton = (e) => {
    if (e.target.value.length > 0 ) {
        setDisabled(false);
        setFirstName(e.target.value);
    } else {
        setDisabled(true);
    }
  }

  const handleSubmit = () => {
    props.loginProps(true);
    localStorage.setItem('name', firstName);
  }
  
  return (
    <Card>
      <h1>Welcome to Sign&Shoot</h1>
      <InputGroup>
        <FormControl
          placeholder="Please Enter your Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleButton}
        />
        <InputGroup.Append>
          <Button disabled={disabled} variant="outline-secondary" onClick={handleSubmit}>Done</Button>
        </InputGroup.Append>
      </InputGroup>
    </Card>
  );
}