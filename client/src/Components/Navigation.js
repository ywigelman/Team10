import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import {FaGamepad, FaHome, FaInfo, FaBook, FaUser} from 'react-icons/fa'

import { MyVerticallyCenteredModal } from './ModalDictionary';


export function Navigation() {
    const [modalShow, setModalShow] = useState(false);

    return (<>
    {/* <Form inline className="fixed-bottom" style={{marginBottom:"5rem"}}>
        <Button variant="outline-info">Dictionary</Button>
    </Form> */}
    <Navbar style={{backgroundColor:'#6800F4', color:'white'}} fixed="bottom" >
        {/* <Navbar.Brand href="/">LOGO</Navbar.Brand> */}
        <Nav className="d-flex justify-content-around py-2 container">
            <Link to='/' className="d-flex flex-column align-items-center" style={{color:'#F8F8F8'}}>
                    <FaHome size="2rem"/>
                <div className="d-none d-md-block" style={{fontWeight:'bold'}}>HOME</div>
            </Link>
            <Link to='/learningPage' className="d-flex flex-column align-items-center" style={{color:'#F8F8F8'}}>
                <img style={{height:"2rem"}} src="/Logos-White.svg"/>
                {/* <FaGamepad size="2rem" /> */}
                <div  className="d-none d-md-block"  style={{fontWeight:'bold'}}>PLAY</div>
            </Link>
            <Link to='/about' className="d-flex flex-column align-items-center" style={{color:'#F8F8F8'}}>
                <FaInfo size="2rem" />
                <div  className="d-none d-md-block"  style={{fontWeight:'bold'}}>ABOUT</div>
            </Link>
            <Link to='/profile' className="d-flex flex-column align-items-center" style={{color:'#F8F8F8'}}>
                <FaUser size="2rem"/>
                <div  className="d-none d-md-block"  style={{fontWeight:'bold'}}>PROFILE</div>
            </Link>
            <div className="d-flex flex-column align-items-center" onClick={() => setModalShow(true)} style={{cursor:'pointer'}}>
                <FaBook size="2rem"/>
                <div  className="d-none d-md-block"  style={{fontWeight:'bold'}}>DICT</div>
            </div>
        </Nav>  
  </Navbar>

  <MyVerticallyCenteredModal 
    show={modalShow}
    onHide={() => setModalShow(false)}
  />

  
  </>)
}
