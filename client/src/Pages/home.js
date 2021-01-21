import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Card,
	FormControl,
	Button,
	Container,
	Accordion,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../Components/Logo";

export function Home() {
	const [name, setName] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [firstName, setFirstName] = useState('');

	const handleButton = e => {
		if (e.target.value.length > 0) {
			setDisabled(false);
			setFirstName(e.target.value);
		} else {
			setDisabled(true);
		}
	};

	const handleSubmit = () => {
		localStorage.setItem('name', firstName);
		setName(firstName);
		setLoggedIn(true);
	};

	const logOut = () => {
		localStorage.removeItem('name');
	};

	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('name')) {
			setLoggedIn(true);
			setName(localStorage.getItem('name'));
		}
	}, []);

	return (
		<>
			<Container className='py-4'>
				{loggedIn && (
					<>
						<div className='display-4'>Hey {name}!</div>
						<div className='my-2'>Select your language:</div>
						<Accordion defaultActiveKey='0'>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey='0'>
									American Sign Language
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='0'>
									<Card.Body>
										<Link to='/learningPage'>
											<Button style={{ backgroundColor: '#6800F4' }}>
												Learn
											</Button>
										</Link>
										<Button style={{ backgroundColor: '#6800F4' }}>
											Tutorial
										</Button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>

							<Card>
								<Accordion.Toggle as={Card.Header} eventKey='1'>
									Israeli Sign Language
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='1'>
									<Card.Body>
										<Link to='/learningPage'>
											<Button disabled style={{ backgroundColor: '#6800F4' }}>
												Learn
											</Button>
										</Link>
										<Button disabled style={{ backgroundColor: '#6800F4' }}>
											Tutorial
										</Button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>

							<Card>
								<Accordion.Toggle as={Card.Header} eventKey='2'>
									Indo-Pakistani Sign Language
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='2'>
									<Card.Body>
										<Link to='/learningPage'>
											<Button disabled style={{ backgroundColor: '#6800F4' }}>
												Learn
											</Button>
										</Link>
										<Button disabled style={{ backgroundColor: '#6800F4' }}>
											Tutorial
										</Button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>

							<Card>
								<Accordion.Toggle as={Card.Header} eventKey='3'>
									Brazilian Sign Language
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='3'>
									<Card.Body>
										<Link to='/learningPage'>
											<Button disabled style={{ backgroundColor: '#6800F4' }}>
												Learn
											</Button>
										</Link>
										<Button disabled style={{ backgroundColor: '#6800F4' }}>
											Tutorial
										</Button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey='4'>
									Russian Sign Language
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='4'>
									<Card.Body>
										<Link to='/learningPage'>
											<Button disabled style={{ backgroundColor: '#6800F4' }}>
												Learn
											</Button>
										</Link>
										<Button disabled style={{ backgroundColor: '#6800F4' }}>
											Tutorial
										</Button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey='5'>
									Japanese Sign Language
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='5'>
									<Card.Body>
										<Link to='/learningPage'>
											<Button disabled style={{ backgroundColor: '#6800F4' }}>
												Learn
											</Button>
										</Link>
										<Button disabled style={{ backgroundColor: '#6800F4' }}>
											Tutorial
										</Button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey='6'>
									Mexican Sign Language
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='6'>
									<Card.Body>
										<Link to='/learningPage'>
											<Button disabled style={{ backgroundColor: '#6800F4' }}>
												Learn
											</Button>
										</Link>
										<Button disabled style={{ backgroundColor: '#6800F4' }}>
											Tutorial
										</Button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey='6'>
									French Sign Language
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='6'>
									<Card.Body>
										<Link to='/learningPage'>
											<Button disabled style={{ backgroundColor: '#6800F4' }}>
												Learn
											</Button>
										</Link>
										<Button disabled style={{ backgroundColor: '#6800F4' }}>
											Tutorial
										</Button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey='7'>
									British Sign Language
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='7'>
									<Card.Body>
										<Link to='/learningPage'>
											<Button disabled style={{ backgroundColor: '#6800F4' }}>
												Learn
											</Button>
										</Link>
										<Button disabled style={{ backgroundColor: '#6800F4' }}>
											Tutorial
										</Button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>

						<div className='my-4'>
							<Button
								style={{ backgroundColor: '#6800F4' }}
								onClick={logOut}
								href='/'>
								<FontAwesomeIcon
									icon='sign-out-alt'
									style={{ backgroundColor: '#6800F4' }}
								/>{' '}
								Sign out
							</Button>
						</div>
					</>
				)}
				{!loggedIn && (
        <>
          <div className="display-4">
        
          </div>
          <div className="display-4">
             Welcome to
             </div>
          <div className="display-4 text-primary">
            
            <div style={{color:"#6800F4"}}><Logo /><span style={{marginLeft:'0.4em'}}>Sign & Shoot</span></div>
            {/* <div className="col"></img></div> */}


          </div>
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
		</>
	);
}
