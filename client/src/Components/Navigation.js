import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
// import { MDBCol,  MDBBtn } from "mdbreact";
// import 'mdbreact/dist/css/mdb.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { MyVerticallyCenteredModal } from './ModalDictionary';


export function Navigation() {
    const [modalShow, setModalShow] = useState(false);

    const hoverDictionary = (e) => {
        e.target.style.color ="blue";
    };

    const exitHover = (e) => {
        e.target.style.color ="#F8F8F8";
    };

    return (<>
    {/* <Form inline className="fixed-bottom" style={{marginBottom:"5rem"}}>
        <Button variant="outline-info">Dictionary</Button>
    </Form> */}
    <Navbar style={{backgroundColor:'#6800F4', color:'white'}} fixed="bottom">
        {/* <Navbar.Brand href="/">LOGO</Navbar.Brand> */}
        <Nav className="mr-auto">
            <Link to='/' className="mx-sm-5 mx-1" style={{color:'#F8F8F8'}}>
                <FontAwesomeIcon icon="home" className="fa-2x" />
                <div style={{fontWeight:'bold'}}>HOME</div>
            </Link>
            <Link to='/learningPage' className="mx-sm-5 mx-1" style={{color:'#F8F8F8'}}>
                <FontAwesomeIcon icon="gamepad" className="fa-2x" />
                <div style={{fontWeight:'bold'}}>PLAY</div>
            </Link>
            <Link to='/about' className="mx-sm-5 mx-1" style={{color:'#F8F8F8'}}>
                <FontAwesomeIcon icon="info" className="fa-2x ml-4" />
                <div style={{fontWeight:'bold'}}>ABOUT</div>
            </Link>
            <Link to='/profile' className="mx-sm-5 mx-1" style={{color:'#F8F8F8'}}>
                <FontAwesomeIcon icon="user" className="fa-2x ml-3" />
                <div style={{fontWeight:'bold'}}>PROFILE</div>
            </Link>
            <div onMouseOver={(e)=> hoverDictionary(e)} onMouseOut={(e) => exitHover(e)} onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon="book" className="fa-2x ml-4" style={{color:'#F8F8F8'}}/>
                <div style={{fontWeight:'bold'}}>DICTIONARY</div>
            </div>
        </Nav>  
  </Navbar>

  <MyVerticallyCenteredModal 
    show={modalShow}
    onHide={() => setModalShow(false)}
  />

  
  </>)
}
