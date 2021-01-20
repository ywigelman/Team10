import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Row} from 'react-bootstrap';

export function Navigation() {
    return (<Navbar>
        <Link to='/'>HOME</Link>
        <Link to='/learningPage'>LEARN NOW</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/profile'>PROFILE</Link>
    </Navbar>)
}
