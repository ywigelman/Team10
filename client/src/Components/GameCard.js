import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import WebcamCapture from './WebcamCapture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../utils/api';

export default function GameCard(props) {
	const { letter, position, total, next, prev } = props;

	const [activateWebcam, setActivateWebcam] = useState(true);
	const [success, setSuccess] = useState(null);

	const reset = () => {
		setActivateWebcam(false);
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

	return (
		<Card>
			<Container>
				<Row
					style={{
						fontSize: '24px',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '2rem',
						marginBottom: '1rem',
					}}>
					Make the Following Letter:
					<br />
					<h1>{letter}</h1>
				</Row>
				<Row
					style={{ justifyContent: 'center', alignItems: 'center' }}
					className='mb-3'>
					{activateWebcam && (
						<WebcamCapture photoProcessor={handleUpload} status={success} />
					)}
				</Row>
				<Row className='justify-content-around'>
					<Button onClick={() => prev()} style={{ backgroundColor: '#6800F4' }}>
						<FontAwesomeIcon icon='fast-backward' />
					</Button>
					<Button onClick={() => reset()} variant='danger'>
						<FontAwesomeIcon icon='redo' />
					</Button>
					<Button onClick={() => next()} style={{ backgroundColor: '#6800F4' }}>
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
						<ProgressBar animated now={(position / total) * 100} />
					</Col>
				</Row>
			</Container>
		</Card>
	);
}
