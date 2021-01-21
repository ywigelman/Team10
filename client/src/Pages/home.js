import React, { useEffect, useState } from "react";
import { Card, InputGroup, FormControl, Button, Container } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import WelcomePgae from './WelcomePage';

export function Home() {
  const [name, setName] = useState('');
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
    localStorage.setItem('name', firstName);
    setName(firstName)
    setLoggedIn(true);
  }

  const logOut = () => {
    localStorage.removeItem('name');
  }

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setLoggedIn(true)
      setName(localStorage.getItem('name'));
    }
  }, [])

  return (
    <Container className="py-4">
      {loggedIn && (
        <>
          <div className="display-4">Hey {name}!</div>
          <div className="my-2">Please choose sign language:</div>
          <div className="my-2">
              <Button className="btn btn-primary" type="button">American Sign Language</Button>
          </div>
          <div className="my-2">
              <Button className="btn btn-primary" type="button" disabled>Israeli Sign Language</Button>
          </div>
          <div className="my-2">
              <Button className="btn btn-primary" type="button" disabled>Indo-Pakistani Sign Language</Button>
          </div>
          <div className="my-2">
              <Button className="btn btn-primary" type="button" disabled>Brazilian Sign Language</Button>
          </div>
          <div className="my-2">
              <Button className="btn btn-primary" type="button" disabled>Russian Sign Language</Button>
          </div>
          <div className="my-2">
              <Button className="btn btn-primary" type="button" disabled>Japanese Sign Language</Button>
          </div>
          <div className="my-2">
              <Button className="btn btn-primary" type="button" disabled>Mexican Sign Language</Button>
          </div>
          <div className="my-2">
              <Button className="btn btn-primary" type="button" disabled>French Sign Language</Button>
          </div>
          <div className="my-2">
              <Button className="btn btn-primary" type="button" disabled>British Sign Language</Button>
          </div>

            <div className="my-4">

            <Button onClick={logOut} href="/"><FontAwesomeIcon icon="sign-out-alt" /> Sign out</Button>
            </div>
        </>
      )}
      {!loggedIn && (
        <>
          <div className="display-4">Welcome to</div>
          <div className="display-4 text-primary">Sign & Shoot</div>
          <div className="fs-3 my-2">What's your name?</div>
          <FormControl
            className="my-2"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleButton}
            />
            <Button disabled={disabled} variant="outline-primary" onClick={handleSubmit}>Next</Button>
        </>
      )}
    </Container>
  );
}
