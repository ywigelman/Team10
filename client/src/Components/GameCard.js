import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Button, Row, Col, Card, Alert } from 'react-bootstrap';
import WebcamCapture from './WebcamCapture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../utils/api';
import './gameCard.css';

export default function GameCard(props) {
	const { letter, position, total, next, prev , picture} = props;

	const [activateWebcam, setActivateWebcam] = useState(true);
	const [success, setSuccess] = useState(null);

	const reset = () => {
		setActivateWebcam(false);
		setSuccess(null);
		setTimeout(() => {
			setActivateWebcam(true);
		}, 0);
	};

	const handleUpload = async image => {
		const res = await api(image, letter);
		console.log(image);
		if (res.toUpperCase() === letter.toUpperCase()) {
			setSuccess(true);
		} else {
			setSuccess(false);
		}
	};
	React.useEffect(() => {
		reset();
	}, [letter]);
	return (
		<Container>
			<Row className='instructions'>
				<h3>Sign the following letter:</h3>
			</Row>
			<Row>
				<Col>
					<h1>{letter}</h1>
				</Col>
			</Row>
			{success === true && (
				<Alert variant='success'>Great job!</Alert>
			)}
			{success === false && (
				<Alert variant='danger'>Try again!</Alert>
			)}
			{success !== true && success !== false && (
				<Alert style={{visibility:'hidden'}}></Alert> // placeholder for success status, should not be visible
			)}
			<Row
				style={{ justifyContent: 'center', alignItems: 'center' }}
				className='mb-3'>
				{activateWebcam && (
					<WebcamCapture
						size='250'
						photoProcessor={handleUpload}
						status={success}
					/>
				)}
        {picture ? <Card className="ml-3 mt-2 mt-sm-0"> <img src={picture}/>  </Card>: <></>}
			</Row>
			<Row className='justify-content-around'>
				<Button onClick={() => prev()} style={{ backgroundColor: '#6800F4' }}>
					<FontAwesomeIcon icon='fast-backward' />
				</Button>
				<Button onClick={() => reset()} variant='danger'>
					<FontAwesomeIcon icon='redo' />
				</Button>
				<Button
					disabled={!success}
					onClick={() => next()}
					style={{ backgroundColor: '#6800F4' }}>
					<FontAwesomeIcon icon='fast-forward' />
				</Button>
			</Row>
			<Row
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '1rem',
				}}>
				<Col>
					<ProgressBar now={(position / total) * 100} />
				</Col>
			</Row>
		</Container>
	);
}
