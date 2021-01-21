import React, { useEffect, useState } from "react";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

export function Home() {
  const [welcomeString, setWelcome] = useState('');



  useEffect(() => {
    setWelcome(localStorage.getItem('name'));
  }, [])

  const deleteStorage = () => {
    localStorage.removeItem('name');
  }

  return (
    <Card>
      <h1>Hey {welcomeString}!  to Sign&Shoot</h1>
      <Button onClick={deleteStorage}><FontAwesomeIcon icon="sign-out-alt"/></Button>
    </Card>
  );
}
