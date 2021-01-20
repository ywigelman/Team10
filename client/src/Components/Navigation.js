import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Row, Form, Button} from 'react-bootstrap';
// import { MDBCol,  MDBBtn } from "mdbreact";
// import 'mdbreact/dist/css/mdb.css'; 

export function Navigation() {
    return (<Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">ASL APP</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to='/' className="mx-2">HOME</Link>
            <Link to='/learningPage' className="mx-2">LEARN NOW</Link>
            <Link to='/about' className="mx-2">ABOUT</Link>
            <Link to='/profile' className="mx-2">PROFILE</Link>
        </Nav>
        <Form inline>
            <Button variant="outline-info">Search</Button>
        </Form>
  </Navbar>)
}
